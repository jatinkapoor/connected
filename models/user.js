const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// this schema is used for creating new users in the database
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  createdTimestamp: { type: Date, default: Date.now },
  lastCheckin: { type: Date },
  date: { type: Date, default: Date.now }
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

userSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);

// 

/*
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
*/