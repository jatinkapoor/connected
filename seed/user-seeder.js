const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/connectedDB',
  { useNewUrlParser: true }
);

const userSeed = [
  {
    firstName: 'Jatin',
    lastName: 'Kapoor',
    email: 'jatin.kapoor@google.com',
    password: 'hello',
    phone: '310-000-0000',
    date: new Date(Date.now())
  },
  {
    firstName: 'Mark',
    lastName: 'Twain',
    email: 'mark.twain@google.com',
    password: 'hello',
    phone: '310-000-0000',
    date: new Date(Date.now())
  },
  {
    firstName: 'Rambo',
    lastName: 'Mambo',
    email: 'rambo.mambo@google.com',
    password: 'hello',
    phone: '310-000-0000',
    date: new Date(Date.now())
  },
  {
    firstName: 'testing',
    lastName: 'testing',
    email: 'testing.testing@google.com',
    password: 'testing',
    phone: '310-000-0000',
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log("records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });








