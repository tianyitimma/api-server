'use strict';
const express = require('express');
const {food} = require('../../models');

const router = express.Router();

router.get('/', getAllFood);
router.get('/:id', getOneFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);


async function getAllFood(req, res, next) {

  try{
    const foundAllFood = await food.findAll();
    res.send(foundAllFood);
  } catch(e) {
    next(e);
  }
  
}

async function getOneFood(req, res, next) {
  const id = req.params.id;
  try{
    const foundFood = await food.findOne(parseInt(id));
    res.send(foundFood);
  } catch(e){
    next(e);
  }
  
}

async function createFood(req, res, next) {

  try{
    const newFood = await food.create({
      name: req.body.name,
      size: req.body.size,
    });

    res.status(201);
    res.send(newFood);
  } catch(e) {
    next(e);
  }

}

async function updateFood(req, res, next){

  try{
    
    const updatedFood = await food.update({
      name: req.body.name,
      size: req.body.size,
    },{ where: {id: req.params.id}});

    res.status(200);
    res.send(updatedFood);
  } catch(e){
    next(e);
  }
}

async function deleteFood(req, res, next) {

  try {
    const id = req.params.id;
    const foundFood = await food.findOne(parseInt(id));
    const deletedRow = await food.destroy({where: {id: id}});
  
    res.status(200);
    res.send(`deleted food: ${foundFood} at row ${deletedRow}`);
  } catch(e) {
    next(e);
  }
  
}

module.exports = router;