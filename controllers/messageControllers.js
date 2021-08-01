const { Message } = require("../db/models");

exports.messagesList = async (_, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
