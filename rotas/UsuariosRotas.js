const express = require('express')
const UserController = require('../controllers/UserController')
const UsuariosRotas = express.Router()

const userController = new UserController();
UsuariosRotas.get('/usuarios', userController.findAll)
UsuariosRotas.get('/usuarios/:id', userController.findId)
UsuariosRotas.post('/usuarios', userController.create)
UsuariosRotas.put('/usuarios/:id', userController.update)
UsuariosRotas.delete('/usuarios/:id', userController.delete)

module.exports = UsuariosRotas;