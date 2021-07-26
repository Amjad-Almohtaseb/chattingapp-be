const express = require("express");
const passport = require("passport");
const router = express.Router();
//controllers
const { signup, signin } = require("../controllers/userControllers");

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

router.post("/signup", signup);

module.exports = router;
