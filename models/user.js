const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  email: {
    type: String, 
    required: true, 
    unique: true,
    match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  },
  password: {type: String, required: true},
  phone: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
