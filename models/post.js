const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdByName: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

module.exports = mongoose.model("Post", PostSchema);
