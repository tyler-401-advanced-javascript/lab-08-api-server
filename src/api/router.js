const express = require('express');

const Memes = require('../models/Memes');
const Products  = require('../models/Products')

const router = express.Router();

const categories = new Memes();
const products = new Products();

router.get('/categories', generateGetAllMiddleware(categories));
router.get('/categories/:id', generateGetOneMiddleware(categories));
router.post('/categories', writeOneCategory);
router.put('/categories/:id', updateOneCategory);
router.delete('/categories/:id', deleteOneCategory);

router.get('/products', generateGetAllMiddleware(products))
router.get('/products/:id', getOneProduct);

function generateGetAllMiddleware(instanceType) {
  return function getAllCategories (req, res, next) {
    console.log(req)
    instanceType.read()
      .then(results => {
        res.status(200).json(results);
      })
      .catch(console.log);
  }
}

function generateGetOneMiddleware(instanceType) {
  return function getOneCategory(req, res, next) {
      if (!req.params.id) throw new Error('No ID provided')
      
      instanceType.read(req.params.id)
        .then(results => {
          console.log(results);
          res.status(200).json(results)
        })
    }
}

function generateWriteOneFunction(instanceType) {
  return function writeOneCategory(req, res, next) {
    if (!req.body) throw new Error('No Body Baby')
    instanceType.create(req.body)
      .then(results => {
        res.status(201).json(results);
      })
  }
}


function updateOneCategory(req, res, next) {
  if (!req.params.id || !req.body) throw new Error('No ID or no BODY supplied.')
  memes.update(req.params.id, req.body)
    .then(results => {
      res.status(202).json(results);
    })
}

function deleteOneCategory(req, res, next) {
  if (!req.params.id) throw new Error('Need an ID param, you person of people you')
  memes.delete(req.params.id)
    .then(results => {
      res.status(200).json(results);
    })
}

module.exports = router;




