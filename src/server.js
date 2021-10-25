'use strict';

const express = require('express');
const app = express();

const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const apiRouter = require('./routes/api.js');
// const logger = require('./middleware/logger');
// const validator = require('./middleware/validator.js');
// const handle404 = require('./error-handlers/404.js');
// const handle500 = require('./error-handlers/500');


app.use(express.json());
// app.use(logger);

//app.post('/talk', talk);
// app.get('/person', validator, (req, res) =>{
//   res.status(200);
//   res.send({ name: req.query.name});
// });

app.use('/api', apiRouter);

app.use('/clothes', clothesRouter);

app.use('/food', foodRouter);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Server is up ', port));
  },
};