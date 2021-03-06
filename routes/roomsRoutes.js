const express = require("express");
const passport = require("passport");
const { roomCreate, roomsList } = require("../controllers/roomControllers");
const router = express.Router();

router.post(
  "/newroom",
  passport.authenticate("jwt", { session: false }),
  roomCreate
);
router.get(
  "/rooms",
  passport.authenticate("jwt", { session: false }),
  roomsList
);
module.exports = router;
