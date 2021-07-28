"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "UserProfiles",
      "userId",
      Sequelize.INTEGER,
      {
        references: {
          model: {
            tableName: "Users",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("UserProfiles", "userId");
  },
};
