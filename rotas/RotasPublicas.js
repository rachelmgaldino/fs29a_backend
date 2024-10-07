const express = require('express');

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const RotasPublicas = express.Router();
require('dotenv').config()
RotasPublicas.get('/publica', (request, response) => {
    return response.send("Publica");
})
// http://localhost:3000/login - POST
const authController = new AuthController()
RotasPublicas.post('/login', authController.login)

const userController = new UserController()
RotasPublicas.post('/cadastrar', userController.create)

module.exports = RotasPublicas