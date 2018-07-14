const express = require('express');
const router = express.Router();
const checkAuth = require('../authentication/check-auth');

router.get('/', checkAuth, (req, res) => {
  res.send('in new home');
});

router.post('/', checkAuth, (req, res) => {
  res.status(201).json({
    message: 'I am successfull'
  });

});


module.exports = router;