const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const User = require('../models/user');
const mongoose = require('mongoose');
const checkAuth = require('../authentication/check-auth');


router.get('/all', checkAuth, (req, res) => {

  Group.find({}).exec().then(result => {
    console.log(result);
    res.status(200).json({
      groups: result
    })
  }).catch(err => {
    res.json(500).json({
      error: err
    })
  });
});


router.get('/', checkAuth,  (req, res) => {
  const userId = req.userData.userId;

  Group.find({users: userId})
    .sort({ date: 'desc' })
    .populate("users")
  .then(groups => {
    console.log(groups);
    res.status(200).json({
      groups: groups
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  })
});

router.post('/', checkAuth, (req, res) => {

  const createdByName = req.userData.firstName;
  const createdBy = req.userData.userId;

  const group = new Group({
    _id: new mongoose.Types.ObjectId(),
    groupName: req.body.groupName,
    createdBy: createdBy,
    description: req.body.description,
    createdByName: createdByName,
    users: [ createdBy ],
    createdTimestamp: new Date(Date.now())
  });

  group.save().then(result => {
    res.status(201).json({
      message: 'Group Created',
      result: result
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

router.put('/addUser', checkAuth ,(req, res) => {

  const userEmail = req.body.email;
  console.log(userEmail);
  


  User.findOne({ email: userEmail }).then(user => {
    console.log(user);
    if (user.length > 0) {
      
  //     Group.findOneAndUpdate(
  //   { _id: groupId },
  //   { $push: { users: userId } },
  //   { new: true })
  // .then(group => {
  //   res.status(200).json({
  //     group: group
  //   })
  // }).catch(err => {
  //   res.status(500).json({
  //     error: err
  //   });
  // });
    }
    res.status(200).json({
      user: user
    })

  }).catch(error => {
    res.status(500).json({
      error: error
    });
  })
  
  
  
  
  // const userId = req.body.userId;
  // const groupId = req.body.groupId;

  // Group.findOneAndUpdate(
  //   { _id: groupId },
  //   { $push: { users: userId } },
  //   { new: true })
  // .then(group => {
  //   res.status(200).json({
  //     group: group
  //   })
  // }).catch(err => {
  //   res.status(500).json({
  //     error: err
  //   });
  // });
});

module.exports = router;
