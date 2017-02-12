'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('TeamsSuperbowl', [
      {
        superbowl_id: 1,
        team_id: 3,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        team_id: 5,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        team_id: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        team_id: 5,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        team_id: 3,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        team_id: 4,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        team_id: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        team_id: 2,
        createdAt: new Date,
        updatedAt: new Date,
      }

    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TeamsSuperbowl', null, {});
  }
};
