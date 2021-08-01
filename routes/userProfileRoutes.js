const express = require("express");
const upload = require("../media/middleware/multer");
const passport = require("passport");
const router = express.Router();
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
