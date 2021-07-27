const { Room, Chat } = require("../db/models");

exports.roomCreate = async (req, res, next) => {
  try {
    const newRoom = await Room.create({
      name: req.body.name,
    });
    req.body.users.push(req.user.id);
    const chat = req.body.users.map((id) => ({
      roomId: newRoom.id,
      userId: id,
    }));
    await Chat.bulkCreate(chat);

    const finalRoom = {
      ...newRoom.toJSON,
      roomId: newRoom.id,
      adminId: req.user.id,
      usersId: req.body.users,
      name: req.body.name,
    };

    res.status(201).json(finalRoom);
  } catch (error) {
    next(error);
  }
};
