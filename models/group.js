const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    groupName: { type: String, required: true },
    createdBy: Schema.Types.ObjectId,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdTimestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Group', GroupSchema);