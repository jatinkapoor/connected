const express = require('express');
const router = express.Router();
const checkAuth = require('../authentication/check-auth');
const path = require('path');

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;