const express = require("express");
const passport = require("passport");
const { messagesList } = require("../controllers/messageControllers");

const router = express.Router();

router.get(
  "/messages",
  passport.authenticate("jwt", { session: false }),
  messagesList
);
module.exports = router;
