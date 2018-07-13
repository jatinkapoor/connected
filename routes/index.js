const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
const csurf = require('csurf');
const csurfProtection = csurf();

router.use('/api', apiRoutes);

router.use('/', (req, res) => {
  res.send('in new home');
});

module.exports = router;