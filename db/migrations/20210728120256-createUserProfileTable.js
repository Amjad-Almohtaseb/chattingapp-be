"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserProfiles", {
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

      image: { type: Sequelize.STRING },

      status: { type: Sequelize.STRING },

      gender: { type: Sequelize.STRING },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserProfiles");
  },
};
