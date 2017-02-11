module.exports = function(sequelize, DataTypes) {
  const TeamsSuperbowl = sequelize.define('TeamsSuperbowl', {
    score: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return TeamsSuperbowl;
};