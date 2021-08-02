const express = require("express");
const passport = require("passport");
const router = express.Router();

//Controllers
const { messagesList } = require("../controllers/messageControllers");

router.get(
  "/messages",
  passport.authenticate("jwt", { session: false }),
  messagesList
);

module.exports = router;
