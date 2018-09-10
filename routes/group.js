const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const User = require('../models/user');
const mongoose = require('mongoose');
const checkAuth = require('../authentication/check-auth');


router.get('/all', checkAuth, (req, res) => {

  Group.find({}).exec().then(result => {
    res.status(200).json({
      groups: result
    })
  }).catch(err => {
    res.json(500).json({
      error: err
    })
  });
});


router.get('/', checkAuth, (req, res) => {
  const userId = req.userData.userId;

  Group.find({ users: userId })
    .sort({ date: 'desc' })
    .populate("users")
    .then(groups => {
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
    users: [createdBy],
    createdTimestamp: new Date(Date.now())
  });

  group.save().then(result => {
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

router.put('/addUser', checkAuth, (req, res) => {

  const userEmail = req.body.email;
  const groupId = req.body.groupId;

  User.findOne({ email: userEmail }).then(user => {

    if (user) {
      const userId = user._id;

      Group.find({$and: [{ _id: groupId }, {users: userId}]})
        .then(user => {

        if (user && user.length > 0) {
          res.status(409).json({
            message: 'User already exists in the group'
          })
        } else {
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
        }
      })
    }
    else {
      res.status(404).json({
        message: "User Not found"
      })
    }

  }).catch(error => {
    res.status(500).json({
      error: error
    });
  })
});

module.exports = router;
