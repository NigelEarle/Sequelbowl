'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  
    return queryInterface.bulkInsert('PlayersSuperbowl', [
      { // super bowl id:1 broncos / seahawks
        superbowl_id: 1,
        player_id: 9,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 10,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 11,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 12,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 17,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 18,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 19,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 1,
        player_id: 20,
        createdAt: new Date,
        updatedAt: new Date,
      },
      { // superbowl id: 2 patriots / seahawks
        superbowl_id: 2,
        player_id: 17,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 18,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 19,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 20,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 5,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 6,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 7,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 2,
        player_id: 8,
        createdAt: new Date,
        updatedAt: new Date,
      },
      { // superbowl id: 3 broncos / panthers
        superbowl_id: 3,
        player_id: 9,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 10,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 11,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 12,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 13,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 14,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 15,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 3,
        player_id: 16,
        createdAt: new Date,
        updatedAt: new Date,
      },
      { // superbowl id: 4 patriots / falcons
        superbowl_id: 4,
        player_id: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 2,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 3,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 4,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 5,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 6,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 7,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        superbowl_id: 4,
        player_id: 8,
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PlayersSuperbowl', null, {});
  }
};
