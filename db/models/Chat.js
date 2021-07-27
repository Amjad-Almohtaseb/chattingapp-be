module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define("Chat", {});

  Chat.associate = (models) => {
    models.User.belongsToMany(models.Room, {
      through: Chat,
      foreignKey: "userId",
    });

    models.Room.belongsToMany(models.User, {
      through: Chat,
      foreignKey: "roomId",
    });
  };

  return Chat;
};
