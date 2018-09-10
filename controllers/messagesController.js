const Messages = require('../models/messages');

// Defining methods for the MessagesController
module.exports = {
    findAll: function (req, res) {
        Messages
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
            const message = {
            message: req.body.message
            }
        Messages
        .create(message)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Messages
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
