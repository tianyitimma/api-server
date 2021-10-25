'use strict';


const food = (sequelize, DataTypes) => sequelize.define('food', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = food;