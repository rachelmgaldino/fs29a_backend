const { Op } = require('sequelize');
const CategoryModel = require('../models/CategoryModel')

class CategoryController {

    async findAll(request, response) {
        const { pesquisa } = request.query;
        const lista = await CategoryModel.findAll({
            where: {
                nome: {
                    [Op.iLike]: `%${pesquisa}%`
                }
            }
         })
       
        return response.json(lista)
    }

    async findId(request, response) {
        const id = request.params.id
        const dado = await CategoryModel.findByPk(id, {

        })
        return response.json(dado)
    }

    async create(request, response){
        const dados = request.body
        await CategoryModel.create(dados);
        return response.json({ message: 'Categoria criada com sucesso' })
    }

    async update (request, response) {
        const id = request.params.id
        const dados = request.body
        await CategoryModel.update(dados, { where: { id: id } })
        return response.json({ message: 'Categoria atualizada com sucesso' })
    }

    async delete (request, response) {
        const id = request.params.id
        await CategoryModel.destroy({ where: { id: id } })
        return response.json({ message: 'Categoria deletada com sucesso' })
    }
}

module.exports = CategoryController