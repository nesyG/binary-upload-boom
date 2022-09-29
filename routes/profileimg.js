const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profileImgController = require("../controllers/profileImg");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createPost", upload.single("profileFile"), profileImgController.createPost);


module.exports = router;
