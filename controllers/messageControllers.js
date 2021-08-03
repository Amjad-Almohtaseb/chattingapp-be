const { Message } = require("../db/models");
exports.messageFetch = async (messageId, next) => {
  try {
    const foundMessage = await Message.findByPk(messageId);

    return foundMessage;
  } catch (error) {
    next(error);
  }
};
exports.messagesList = async (_, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
exports.messageDelete = async (req, res, next) => {
  try {
    if (req.senderId !== req.user.id) {
      throw {
        status: 401,
        message: "you can't delete a message that's not yours",
      };
    }
    await req.message.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
