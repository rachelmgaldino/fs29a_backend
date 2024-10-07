const express = require('express');

const AuthController = require('../controllers/AuthController');
const RotasPublicas = express.Router();
require('dotenv').config()
RotasPublicas.get('/publica', (request, response) => {
    return response.send("Publica");
})
// http://localhost:3000/login - POST
const authController = new AuthController()
RotasPublicas.post('/login', authController.login)

RotasPublicas.post('/cadastrar', (request, response) => {
    const dados = request.body
    // Model para cadastrar
    response.json({ message: 'Cadastro realizado com sucesso' });
})

module.exports = RotasPublicas