const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Comment", CommentSchema);