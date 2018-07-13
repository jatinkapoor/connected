const router = require("express").Router();
const articleController = require("../../controllers/messagesController");

// Matches with "/api/messages"
router.route("/")
    .get(messagesController.findAll)
    .post(messagesController.create);

// Matches with "/api/messages/:id"
router
    .route("/:id")
    .delete(messagesController.remove)
    .post(messagesController.create);

module.exports = router;
