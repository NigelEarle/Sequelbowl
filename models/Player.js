module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    player_title: DataTypes.STRING,
    description: DataTypes.STRING,
    position_title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Player.belongsTo(models.Team, {
          foreignKey: 'team_id',
        })
        Player.belongsTo(models.Stat, {
          foreignKey: 'stat_id',
        })
      }
    }
  });
  return Player;
};