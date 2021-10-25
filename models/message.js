'use strict';


const message = (sequelize, DataTypes) => sequelize.define('channel', {
  words: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  channelId: {
    type: DataTypes.UUID,
    //defaultValue: sequelize.UUID(),
    allowNull: false,
  },
});

module.exports = message;