const express = require("express");
const passport = require("passport");
const router = express.Router();

//Controllers
const { roomCreate, roomsList } = require("../controllers/roomControllers");

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
