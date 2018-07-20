const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require('mongoose');
const Post = require('../models/post');
const Comment = require('../models/comment');
const jwt = require('jsonwebtoken');
const checkAuth = require('../authentication/check-auth');

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

router.get('/:userid', checkAuth, (req, res) => {


  const userId = req.userData.userId;
  console.log(userId);

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

      Post.find({ createdBy: { $in: uniqUsers } }).populate("comments").then(result => {
        console.log(result);
        res.status(200).json({
          posts: result
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
});


router.post('/comment/:postid', (req, res) => {

  const postId = req.params.postid;
  const userId = req.body.userId;
  const comm = req.body.comment;
  const myComment = new Comment({
    createdBy: mongoose.Types.ObjectId(userId),
    comment: comm
  });



  myComment.save().then(comment => {
    return Post.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(postId) },
      {
        $push: { comments: comment._id }
      }, { new: true })
      .then(post => {
        res.status(201).json({
          post: post
        });
      })
  }).catch(
    err => {
      res.status(500).json({
        error: err
      });
    }
  )
});


module.exports = router;