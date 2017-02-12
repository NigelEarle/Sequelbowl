module.exports = function(sequelize, DataTypes) {
  const Superbowl = sequelize.define('Superbowl', {
    number: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Superbowl.belongsToMany(models.Player, {
          through: 'PlayersSuperbowl',
          foreignKey: 'superbowl_id',
        })
        Superbowl.belongsToMany(models.Team, {
          through: 'TeamsSuperbowl',
          foreignKey: 'superbowl_id',
        })
        Superbowl.belongsToMany(models.Coach, {
          through: 'CoachesSuperbowl',
          foreignKey: 'superbowl_id',
        })
      }
    }
  });
  return Superbowl;
};