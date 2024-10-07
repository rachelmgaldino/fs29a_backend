const express = require('express');
const ProductController = require('../controllers/ProductController');

const ProductRotas = express.Router();

const productController = new ProductController();
ProductRotas.get('/produtos', productController.findAll)
ProductRotas.get('/produtos/:id', productController.findId)
ProductRotas.post('/produtos', productController.create)
ProductRotas.put('/produtos/:id', productController.update)
ProductRotas.delete('/produtos/:id', productController.delete)

module.exports = ProductRotas