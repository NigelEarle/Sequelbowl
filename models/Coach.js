module.exports = function(sequelize, DataTypes) {
  const Coach = sequelize.define('Coach', {
    name: DataTypes.STRING,
    coaching_title: DataTypes.STRING,
    description: DataTypes.STRING,
    position_title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Coach.belongsToMany(models.Superbowl, {
          through: 'CoachesSuperbowl',
          foreignKey: 'coach_id',
        })
      }
    }
  });
  return Coach;
};