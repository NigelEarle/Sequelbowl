module.exports = function(sequelize, DataTypes) {
  const Coach = sequelize.define('Coach', {
    name: DataTypes.STRING,
    coaching_title: DataTypes.STRING,
    description: DataTypes.STRING,
    position_title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return Coach;
};