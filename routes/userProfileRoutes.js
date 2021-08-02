const express = require("express");
const passport = require("passport");
const upload = require("../media/middleware/multer");
const router = express.Router();

//Controllers
const {
  userProfileUpdate,
  profilesList,
} = require("../controllers/userProfileControllers");

router.put(
  "/userprofile/:userprofileId",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  userProfileUpdate
);

router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  profilesList
);

module.exports = router;
