"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Messages", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      text: { type: Sequelize.STRING },

      image: { type: Sequelize.STRING },
      voicenote: { type: Sequelize.STRING },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Messages");
  },
};
