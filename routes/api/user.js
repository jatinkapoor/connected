const express = require('express');
const router = express.Router();
const csrf = require('csurf');
csrfProtection = csrf();
router.use(csrfProtection);

router.get('/user/signup', (req, res, next) => {



});