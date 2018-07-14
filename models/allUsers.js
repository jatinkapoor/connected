const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allUsers = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    date: {type: Date, required: true}
});

module.exports = mongoose.model('AllUsers', allUsersSchema);