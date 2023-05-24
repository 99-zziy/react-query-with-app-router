const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  id: {
    type: String,
    maxLength: 12,
    unique: 1,
  },
  text: {
    type: String,
  },
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = { Comment };
