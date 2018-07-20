const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllUsers = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    date: {type: Date, required: true}
});

module.exports = mongoose.model('AllUsers', allUsersSchema);