"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Messages", "senderId", Sequelize.INTEGER, {
      references: {
        model: {
          tableName: "Users",
          schema: "schema",
        },
        key: "id",
      },
      allowNull: false,
    });
    await queryInterface.addColumn("Messages", "roomId", Sequelize.INTEGER, {
      references: {
        model: {
          tableName: "Rooms",
          schema: "schema",
        },
        key: "id",
      },
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Messages", "senderId");
    await queryInterface.removeColumn("Messages", "roomId");
  },
};
