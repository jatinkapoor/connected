const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require('mongoose');

router.post('/:userid', (req, res) => {

  const userId = req.params.userid;

  const post = new db.Post({
    _id: new mongoose.Types.ObjectId,
    createdBy: userId,
    post: req.body.post
  })

  post
    .save()
    .then(post => {
      res.status(201).json({
        post: post
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get('/:userid', (req, res) => {

  const userId = req.params.userid;

  db.Group.find({ users: userId })
  .exec()
  .then(groups => {
    const userSet = new Set(); 

    groups.map(group => {
      group.users.map(user => {
        userSet.add(user.toString());
      });
    }); 

    const uniqUsers = [...userSet]; 
    res.status(200).json({
      uses: uniqUsers
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  })
});


module.exports = router;