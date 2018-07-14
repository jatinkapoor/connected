const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            }, process.env.JWT_KEY, {
                expiresIn: '24h',
              })
            return res.status(200).json({
              message: 'Auth Successful',
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
              console.log(result);
              res.status(201).json({
                message: 'User Created'
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
  }
}