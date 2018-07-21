const express = require('express');
const router = express.Router();
const messagesController = require("../controllers/messagesController");
const path = require('path');

router.route("/")
    .get(messagesController.findAll)
    .post(messagesController.create);

router
    .route("/:id")
    .delete(messagesController.remove)
    .post(messagesController.create);

module.exports = router;