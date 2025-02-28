const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    likes: {
    type: Number,
    required: true,
    },
    post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    },
  
});

module.exports = mongoose.model("Comments", CommentsSchema);
