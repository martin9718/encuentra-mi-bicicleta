'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bike_stations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      obcn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('IN_SERVICE', 'NOT_IN_SERVICE'),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('bike_stations');
  },
};
