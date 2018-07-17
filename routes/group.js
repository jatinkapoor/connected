const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const User = require('../models/user');
const mongoose = require('mongoose');


router.get('/', (req, res) => {

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


router.get('/:userid', (req, res) => {
  const userId = req.params.userid

  Group.find({users: userId})
  .exec()
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

router.post('/', (req, res) => {

  const group = new Group({
    _id: new mongoose.Types.ObjectId(),
    groupName: req.body.groupName,
    createdBy: req.body.createdBy,
    users: [ req.body.createdBy ],
    createdTimestamp: new Date(Date.now())
  });

  group.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Group Created',
      result: result
    })
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.put('/addUser', (req, res) => {

  const userId = req.body.userId;
  const groupId = req.body.groupId;

  Group.findOneAndUpdate(
    { _id: groupId }, 
    { $push: { users: userId } },
    { new: true })
  .then(group => {
    res.status(200).json({
      group: group
    })
  }).catch(err => {
    res.status(500).json({
      error: err 
    });
  });
});

module.exports = router;