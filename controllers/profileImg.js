const cloudinary = require("../middleware/cloudinary");
const ProfileImg = require("../models/ProfileImg");

module.exports = {
    createPost: async (req, res) => {
      try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
  
        await ProfileImg.create({
          image: result.secure_url,
          cloudinaryId: result.public_id,
          user: req.user.id,
        });
        console.log("Profile Image has been added!");
        res.redirect("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  };