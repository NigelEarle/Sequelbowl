module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Coaches', [
        {
          name: 'Bill Bellichek',
          coaching_title: 'head coach',
          description: '17 years as Patriots head coach',
          position_title: 'head coach',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 1,
        },
        {
          name: 'Dan Quinn',
          coaching_title: 'head coach',
          description: 'Previously with the Seahawks',
          position_title: 'head coach',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 2,
        },
        {
          name: 'Gary Kubiak',
          coaching_title: 'head coach',
          description: 'Former Bronco. The man.',
          position_title: 'head coach',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 3,
        },
        {
          name: 'Ron Rivera',
          coaching_title: 'head coach',
          description: 'Hustler',
          position_title: 'head coach',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 4,
        },
        {
          name: 'Kyle Shanahan',
          coaching_title: 'Offensive Coordinator',
          description: '17 years as Patriots head coach',
          position_title: 'offense',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 2,
        },
        {
          name: 'Matt Patricia',
          coaching_title: 'Defensive Coordinator',
          description: '17 years as Patriots head coach',
          position_title: 'defense',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 1,
        },
        {
          name: 'Pete Carroll',
          coaching_title: 'Head Coach',
          description: 'Previous Spartans head coach',
          position_title: 'head coach',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 5,
        },
        {
          name: 'Jon Fox',
          coaching_title: 'Head Coach',
          description: 'Now Bears head coach',
          position_title: 'head coach',
          createdAt: new Date,
          updatedAt: new Date,
          team_id: 3,
        }
    ], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Coach', null, {

    });
  }
};