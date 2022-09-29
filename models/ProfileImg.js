const mongoose = require("mongoose");

const ProfileImgSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = mongoose.model("ProfileImg", ProfileImgSchema);
