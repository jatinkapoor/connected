const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/user');
const Group = require('../models/group');
const checkAuth = require('../authentication/check-auth');

router.post('/login', userController.login_user);

router.post('/register', userController.register_user);

router.delete('/:userid', userController.delete_user);

router.get('/', checkAuth, userController.get_users);

module.exports = router;