const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const db = require('../models');
const User = require('../models/user');
const Group = require('../models/group');

module.exports = {

  login_user: (req, res) => {
    User.find({
      email: req.body.email
    })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: `Auth failed`
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: 'Auth failed'
            });
          }
          if (result) {
            const jwtToken = jwt.sign({
              userId: user[0]._id,
              firstName: user[0].firstName,
              email: user[0].email
            }, "secret", {
                expiresIn: '24h',
              })
            return res.status(200).json({
              message: 'Auth Successful',
              userId: user[0]._id,
              token: jwtToken
            });
          }
          res.status(401).json({
            message: 'Auth failed'
          });
        });
      })
  },


  register_user: (req, res) => {
    User.find({
      email: req.body.email
    }).exec().then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Email Exists'
        });
      } else {
        
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              phone: req.body.phone
            });
            user.save().then(result => {
              res.status(201).json({
                message: 'User Created',
                user: result
              });
            }).catch(err => {
              res.status(500).json({
                error: err
              });
            });
          }
        });
      }
    })
  },

  delete_user: (req, res) => {
    User.remove({
      _id: req.params.userid
    }).exec().then(result => {
      res.status(200).json({
        message: 'User deleted'
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
  },

  get_users: (req, res) => {
    const userId = req.userData.userId;
    Group.find({ users: userId })
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
          User.find({ _id: { $in: uniqUsers } }).then(users => {
            res.status(200).json({
              users: users
            });
          });
        } else {
          User.find({ _id: userId }).then(user => {
            res.status(200).json({
              users: user
            });
          })
        }
      });
  },

  get_user: (req, res) => {
    const userEmail = req.body.email;

    User.find({ email: userEmail }).then(user => {

      res.status(200).json({
        user
      });
    }).catch(error => {
      res.status(500).json({
        error: error
      });
    })
  },

  updateCheckin: (req, res) => {
    const userId = req.userData.userId;
    const date = Date(Date.now());
    User.update({ _id: userId },
      { $set: { lastCheckin: date } },
      { multi: true }).then(result => {
        res.status(200).json({
          result
        })
      }).catch(error => {
        res.status(500).json({
          error
        })
      })
  }
}
