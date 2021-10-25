'use strict';

const express = require('express');
const router = express.Router();
const { food, clothes } = require('../../models');
const Collection = require('../../models/lib/Collection');


const modelMap = {
  food: new Collection(food),
  clothes: new Collection(clothes),
};

router.use('/:model', function(req, res, next) {

  const model = modelMap[req.params.model];
  
  if(!model) {
    next('No model found');
  }

  req.model = model;
  next();

});

//get all items
router.get('/:model', async (req, res) => {
  const model = req.model;
  let results = await model.read();
  res.send(results);
});

//get one item
router.get('/:model/:id', async (req, res) => {
  const model = req.model;
  const id = req.params.id;
  let result = await model.read(id);
  res.send(result);
});

//creat an item
router.post('/:model', async (req, res) => {
  const model = req.model;
  const json = req.body;
  let newItem = await model.create(json);
  res.send(newItem);
});

//update an item
router.put('/:model/:id', async (req, res) => {
  const model = req.model;
  const id = req.params.id;
  const json = req.body;
  let updatedItem = await model.update(id, json);
  res.send(updatedItem);
});

//delete an item
router.delete('/:model/:id', async (req, res) => {
  const model = req.model;
  const id = req.params.id;
  let deletedItem = await model.delete(id);
  res.send(deletedItem);
});

module.exports = router;