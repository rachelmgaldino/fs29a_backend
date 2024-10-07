const express = require('express');
const CategoryController = require('../controllers/CategoryController');

const CategoryRotas = express.Router();

const categoryController = new CategoryController();
CategoryRotas.get('/categorias', categoryController.findAll)
CategoryRotas.get('/categorias/:id', categoryController.findId)
CategoryRotas.post('/categorias', categoryController.create)
CategoryRotas.put('/categorias/:id', categoryController.update)
CategoryRotas.delete('/categorias/:id', categoryController.delete)

module.exports = CategoryRotas