'use strict';


require('dotenv').config();
const {db} = require('./models');
const app = require('./src/server.js');


const PORT = process.env.PORT || 3333;

db.sync().then(() => {
  app.start(PORT);
});
