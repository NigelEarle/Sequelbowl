'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  
    return queryInterface.bulkInsert('CoachesSuperbowl', [
      {
        superbowl_id: 1,
        coach_id: 8,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        coach_id: 7,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        coach_id: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        coach_id: 7,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        coach_id: 3,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        coach_id: 4,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        coach_id: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        coach_id: 2,
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Person', null, {});
  }
};
