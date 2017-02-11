module.exports = function(sequelize, DataTypes) {
  const Stat = sequelize.define('Stat', {
    name: DataTypes.STRING,
    catches: DataTypes.INTEGER,
    yards: DataTypes.INTEGER,
    td: DataTypes.INTEGER,
    pass_attempts: DataTypes.INTEGER,
    tackles: DataTypes.INTEGER,
    sacks: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    targets: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return Stat;
};