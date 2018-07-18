const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkInSchema = new Schema ({ 
    name: { type: String, required: true }, 
    lastName: { type: String, required: true }
});

const CheckIn = mongoose.model('CheckIn', checkInSchema);

module.exports = CheckIn;