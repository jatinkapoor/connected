// this schema is used for creating new users in the database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({ 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true },
    email: { type: String, required: true }, 
    phoneNumber: { type: String, required: true }, 
    password: { type: String, required: true }, 
    createdTimestamp: { type: Date, default: Date.now },
    lastCheckin: { type: Date }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
