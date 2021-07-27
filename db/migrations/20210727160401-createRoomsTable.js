"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Rooms", {
      name: { type: Sequelize.STRING, unique: true },

      image: { type: Sequelize.STRING },

      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      updatedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Rooms");
  },
};
