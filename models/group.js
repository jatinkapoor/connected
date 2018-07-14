// this schema is used for creating new groups

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema ({ 
    groupName: { type: String, required: true }
});

const group = mongoose.model('group', groupSchema);

module.exports = group;