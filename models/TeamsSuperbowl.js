module.exports = function(sequelize, DataTypes) {
  const TeamsSuperbowl = sequelize.define('TeamsSuperbowl', {
    afc_score: DataTypes.INTEGER,
    nfc_score: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return TeamsSuperbowl;
};