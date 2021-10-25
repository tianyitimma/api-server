const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM('S', 'M', 'L'),
    allowNull: true,
  },
});

module.exports = clothes;