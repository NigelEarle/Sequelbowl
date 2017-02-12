'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('TeamsSuperbowls', [
      {
        superbowl_id: 1,
        team_id: 3,
        score: 8,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        team_id: 5,
        score: 48,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        team_id: 1,
        score: 28,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        team_id: 5,
        score: 24,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        team_id: 3,
        score: 24,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        team_id: 4,
        score: 10,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        team_id: 1,
        score: 34,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        team_id: 2,
        score: 28,
        createdAt: new Date,
        updatedAt: new Date,
      }

    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TeamsSuperbowl', null, {});
  }
};
