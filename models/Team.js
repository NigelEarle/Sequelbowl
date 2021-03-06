module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    conference: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Team.belongsToMany(models.Superbowl, {
          through: 'TeamsSuperbowl',
          foreignKey: 'team_id',
        });
        Team.hasMany(models.Player, {
          foreignKey: 'team_id',
        });
        Team.hasMany(models.Coach, {
          foreignKey: 'team_id',
        });
      }
    }
  });
  return Team;
};