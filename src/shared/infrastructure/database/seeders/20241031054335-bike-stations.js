'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const stationsFilePath = path.join(__dirname, '..', 'bike_stations.json');
    const stations = JSON.parse(fs.readFileSync(stationsFilePath, 'utf8'));

    await queryInterface.sequelize.transaction(async (t) => {
      for (const station of stations) {
        const existingStation = await queryInterface.select(
          null,
          'bike_stations',
          {
            where: { id: station.id },
            transaction: t,
          }
        );

        if (existingStation) {
          await queryInterface.bulkUpdate(
            'bike_stations',
            station,
            {
              id: station.id,
            },
            { transaction: t }
          );
        } else {
          await queryInterface.bulkInsert('bike_stations', [station], {
            transaction: t,
          });
        }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('bike_stations', null, {});
  },
};
