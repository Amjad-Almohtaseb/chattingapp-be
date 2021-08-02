module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    text: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    voicenote: { type: DataTypes.STRING },
  });

  Message.associate = (models) => {
    models.User.hasMany(Message, {
      foreignKey: "senderId",
      allowNull: false,
      as: "messages",
    });

    Message.belongsTo(models.User, {
      foreignKey: "senderId",
    });

    models.Room.hasMany(Message, {
      foreignKey: "roomId",
      allowNull: false,
      as: "messages",
    });

    Message.belongsTo(models.Room, {
      foreignKey: "roomId",
    });
  };
  return Message;
};
