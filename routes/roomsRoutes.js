const express = require("express");
const passport = require("passport");
const { roomCreate } = require("../controllers/roomControllers");
const router = express.Router();

router.post(
  "/newroom",
  passport.authenticate("jwt", { session: false }),
  roomCreate
);

module.exports = router;
