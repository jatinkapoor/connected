const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/connectedDB',
  { useNewUrlParser: true }
);

const groupSeed = [
  {
    groupName: 'newGrp1',
    createdBy: 'ObjectId("5b2e390f0920f03bd9afe964")',
    users: ['ObjectId("5b2e390f0920f03bd9afe964")'],
    createdTimestamp: new Date(Date.now())
  }
]


db.Group
  .remove({})
  .then(() => db.Group.collection.insertMany(groupSeed))
  .then(data => {
    console.log("records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });