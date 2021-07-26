"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },

      username: { type: Sequelize.STRING, allowNull: false, unique: true },

      password: { type: Sequelize.STRING, allowNull: false },

      fullname: { type: Sequelize.STRING },

      email: { type: Sequelize.STRING, isEmail: true },

      updatedAt: { type: Sequelize.DATE },

      createdAt: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
