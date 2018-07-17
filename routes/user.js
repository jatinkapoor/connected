const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/user');
const Group = require('../models/group');

router.post('/login', userController.login_user);

router.post('/register', userController.register_user);

router.delete('/:userid', userController.delete_user);


module.exports = router;