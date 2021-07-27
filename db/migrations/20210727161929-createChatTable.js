"use strict";
//manual throw table
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Chats", {
      updatedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE },
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Chats");
  },
};
