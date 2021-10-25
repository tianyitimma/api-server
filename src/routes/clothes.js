'use strict';
const express = require('express');
const {clothes} = require('../../models');

const router = express.Router();

router.get('/', getAllClothes);
router.get('/:id', getOneClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

async function getOneClothes(req, res) {
  const id = req.params.id;

  const foundClothes = await clothes.findOne(parseInt(id));
  res.send(foundClothes);
}

async function getAllClothes(req, res, next) {

  try{
    const foundAllClothes = await clothes.findAll();
    res.send(foundAllClothes);
  } catch(e) {
    next(e);
  }
  
}

async function createClothes(req, res, next) {

  try{
    const newClothes = await clothes.create({
      name: req.body.name,
      size: req.body.size,
    });

    res.status(201);
    res.send(newClothes);
  } catch(e) {
    next(e);
  }

}

async function updateClothes(req, res, next){

  try{
    
    const updatedClothes = await clothes.update({
      name: req.body.name,
      size: req.body.size,
    },{ where: {id: req.params.id}});

    res.status(200);
    res.send(updatedClothes);
  } catch(e){
    next(e);
  }
}

async function deleteClothes(req, res, next) {

  try {
    const id = req.params.id;
    const deletedClothes = await clothes.destroy({where: {id: id}});
  
    res.status(200);
    res.send(deletedClothes);
  } catch(e) {
    next(e);
  }
  
}

module.exports = router;