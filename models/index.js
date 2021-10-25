'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');
const channelModel = require('./channel.js');
const messageModel = require('./message.js');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';


const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

const sequelize = new Sequelize(DATABASE_URL, options);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const messages = messageModel(sequelize, DataTypes);
const channels = channelModel(sequelize, DataTypes);

channels.hasMany(messages, { foreignKey: 'channelId', sourceKey: 'id'});
messages.belongsTo(channels, { foreignKey: 'channelId', targetKey: 'id'});

module.exports = {
  db: sequelize,
  food,
  clothes,
  channels,
  messages,
};