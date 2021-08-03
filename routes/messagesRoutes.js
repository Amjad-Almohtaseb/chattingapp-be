const express = require("express");
const passport = require("passport");
const {
  messagesList,
  messageDelete,
  messageFetch,
} = require("../controllers/messageControllers");

const router = express.Router();
router.param("messageId", async (req, res, next, messageId) => {
  const message = await messageFetch(messageId, next);

  req.senderId = message.dataValues.senderId;
  if (message) {
    req.message = message;

    next();
  } else {
    next({ message: "message Not Found", status: 404 });
  }
});
router.get(
  "/messages",
  passport.authenticate("jwt", { session: false }),
  messagesList
);
router.delete(
  "/message/:messageId",
  passport.authenticate("jwt", { session: false }),
  messageDelete
);

module.exports = router;
