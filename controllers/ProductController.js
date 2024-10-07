const ProductModel = require('../models/ProductModel')
class ProductController {

    async findAll(request, response) {
        const lista = await ProductModel.findAll({    })
        return response.json(lista)
    }

    async findId(request, response) {
        const id = request.params.id
        const dado = await ProductModel.findByPk(id, {

        })
        return response.json(dado)
    }

    async create(request, response){
        const dados = request.body
        await ProductModel.create(dados);
        return response.json({ message: 'Produto criado com sucesso' })
    }

    async update (request, response) {
        const id = request.params.id
        const dados = request.body
        await ProductModel.update(dados, { where: { id: id } })
        return response.json({ message: 'Produto atualizado com sucesso' })
    }

    async delete (request, response) {
        const id = request.params.id
        await ProductModel.destroy({ where: { id: id } })
        return response.json({ message: 'Produto deletado com sucesso' })
    }
}

module.exports = ProductController