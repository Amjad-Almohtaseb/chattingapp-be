module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define("UserProfile", {
    image: { type: DataTypes.STRING },

    status: { type: DataTypes.STRING },

    gender: { type: DataTypes.STRING },
  });
  UserProfile.associate = (models) => {
    models.User.hasOne(UserProfile, {
      foreignKey: "userId",
      allowNull: false,
      as: "userProfile",
    });
    UserProfile.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return UserProfile;
};
