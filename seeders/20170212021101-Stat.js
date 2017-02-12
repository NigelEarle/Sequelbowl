'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      // return queryInterface.bulkInsert('Stats', [
      //   {
      //     catches: null,
      //     yards: null,
      //     td: null,
      //     pass_attempts: null,
      //     tackles: null,
      //     sacks: null,
      //     int: null,
      //     rating: null,
      //     targets: null,
      //     createdAt: new Date,
      //     updatedAt: new Date
      //   },
      //   {
      //     catches: null,
      //     yards: null,
      //     td: null,
      //     pass_attempts: null,
      //     tackles: null,
      //     sacks: null,
      //     int: null,
      //     rating: null,
      //     targets: null,
      //     createdAt: new Date,
      //     updatedAt: new Date
      //   },
      //   {
      //     catches: null,
      //     yards: null,
      //     td: null,
      //     pass_attempts: null,
      //     tackles: null,
      //     sacks: null,
      //     int: null,
      //     rating: null,
      //     targets: null,
      //     createdAt: new Date,
      //     updatedAt: new Date
      //   },
      //   {
      //     catches: null,
      //     yards: null,
      //     td: null,
      //     pass_attempts: null,
      //     tackles: null,
      //     sacks: null,
      //     int: null,
      //     rating: null,
      //     targets: null,
      //     createdAt: new Date,
      //     updatedAt: new Date
      //   }
      // ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stats', null, {});
  }
};
