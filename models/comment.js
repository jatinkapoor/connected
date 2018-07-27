const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdByName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
