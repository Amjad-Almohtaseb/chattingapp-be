module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    name: { type: DataTypes.STRING, unique: true },
    image: { type: DataTypes.STRING },
  });

  return Room;
};
