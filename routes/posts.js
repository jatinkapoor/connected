const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require('mongoose');
const Post = require('../models/post');
const Comment = require('../models/comment');
const jwt = require('jsonwebtoken');
const checkAuth = require('../authentication/check-auth');

router.post('/', checkAuth, (req, res) => {

  const userId = req.userData.userId;
  const createdByName = req.userData.firstName;

  const post = new db.Post({
    _id: new mongoose.Types.ObjectId,
    createdBy: userId,
    createdByName: createdByName,
    post: req.body.post
  });

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

router.get('/', checkAuth, (req, res) => {

  const userId = req.userData.userId;

  db.Group.find({ users: userId })
    .exec()
    .then(groups => {

      if (groups.length > 0) {
        const userSet = new Set();
        groups.map(group => {
          group.users.map(user => {
            userSet.add(user.toString());
          });
        });
        const uniqUsers = [...userSet];
        Post.find({ createdBy: { $in: uniqUsers } }).sort({ date: 'desc' }).populate("comments").sort({ date: 'desc' }).then(result => {
          console.log(result);
          res.status(200).json({
            posts: result
          });
        });
      } else {
        Post.find({ createdBy: userId }).sort({ date: 'desc' }).populate("comments").sort({ date: 'desc' }).then(result => {
          console.log(result);
          res.status(200).json({
            posts: result
          });
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
});


router.get('/:postid', checkAuth, (req, res) => {
  const postId = req.params.postid;
  Post.find({ _id: postId })
    .sort({ date: 'desc' })
    .populate({ path: "comments", options: { sort: {'date' : 'desc'} }})
        .sort({ date: 'desc' }).then(result => {
    console.log(result);
    res.status(200).json({
      posts: result
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});



router.post('/:postid', checkAuth,  (req, res) => {

  const postId = req.params.postid;
  const createdByName = req.userData.firstName;
  const userId = req.userData.userId;
  const comm = req.body.comment;
  const myComment = new Comment({
    createdBy: mongoose.Types.ObjectId(userId),
    createdByName: createdByName,
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
