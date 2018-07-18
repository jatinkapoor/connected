const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }] 
});

module.exports = mongoose.model("Post", PostSchema);