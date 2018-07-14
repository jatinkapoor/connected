const mongoose = require('mongoose');
const AllUsers = require('../models/allUsers');

module.exports = {
    load_all_users: (req, res) => {
			AllUsers.findAll({
				_id: req.params.userid
			}).sort({ date: -1})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
    }
};