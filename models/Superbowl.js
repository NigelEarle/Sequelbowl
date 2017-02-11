module.exports = function(sequelize, DataTypes) {
  const Superbowl = sequelize.define('Superbowl', {
    number: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Superbowl.belongsToMany(models.Team, {
          through: 'TeamsSuperbowl',
          foreignKey: 'superbowl_id',
        })
        Superbowl.hasMany(models.Player, {
          foreignKey: 'superbowl_id',
        })
        Superbowl.hasMany(models.Coach, {
          foreignKey: 'superbowl_id',
        })
      }
    }
  });
  return Superbowl;
};