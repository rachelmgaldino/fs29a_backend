const express = require('express')
const PostModel = require('../models/PostModel')

const PostsRotas = express.Router()

PostsRotas.get('/posts', (request, response) => {
    const lista = PostModel.findAll();
    return lista
})
PostsRotas.post('/posts', (request, response) => {
    const dados = request.body.
    PostModel.create(dados);
    return response.json({ message: 'Post criado com sucesso' })
})
PostsRotas.put('/posts/:id', (request, response) => {
    const id = request.params.id
    const dados = request.body.
    PostModel.update(dados, { where: { id: id } })
    return response.json({ message: 'Post atualizado com sucesso' })
})
PostsRotas.delete('/posts/:id', (request, response) => {
    const id = request.params.id
    PostModel.destroy({ where: { id: id } })
    return response.json({ message: 'Post deletado com sucesso' })
})

module.exports = PostsRotas;