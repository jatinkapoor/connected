const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/login', userController.login_user);

router.post('/register', userController.register_user);

router.delete('/:userid', userController.delete_user);


module.exports = router;