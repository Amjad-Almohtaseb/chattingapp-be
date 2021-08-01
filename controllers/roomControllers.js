const { Room, Chat, User } = require("../db/models");

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
      roomId: newRoom.id,
      adminId: req.user.id,
      usersId: req.body.users,
      name: req.body.name,
      image: newRoom.image,
    };

    res.status(201).json(finalRoom);
  } catch (error) {
    next(error);
  }
};

exports.roomsList = async (req, res, next) => {
  try {
    const rooms = await Room.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: User,
          attributes: ["id"],
        },
      ],
    });
    console.log(rooms);
    const newRooms = rooms.map((room) => {
      return {
        adminId: req.user.id,
        roomId: room.dataValues.id,
        name: room.dataValues.name,
        image: room.dataValues.image,
        usersId: room.dataValues.Users.map((user) => user.id),
      };
    });
    res.json(newRooms);
  } catch (error) {
    next(error);
  }
};
