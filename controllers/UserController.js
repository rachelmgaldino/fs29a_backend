const { Op } = require('sequelize');
const UserModel = require('../models/UserModel');
const Helpers = require('../helpers/Helpers');
class UserController {

    async findAll(request, response) {
        const { pesquisa } = request.query;
        const lista = await UserModel.findAll({
            attributes: ['id', 'name', 'login'],
            where: {
                name: {
                    [Op.iLike]: `%${pesquisa}%`
                }
            }
        })
        return response.json(lista)
    }

    async findId(request, response) {
        const id = request.params.id
        const dado = await UserModel.findByPk(id, {
            attributes: ['id', 'name', 'login']
        })
        return response.json(dado)
    }

    async create(request, response){
        const dados = request.body
        const criptoPassword = Helpers.generateHashPassword(dados.password)
        dados.password = criptoPassword;
    
        await UserModel.create(dados);
        return response.json({ message: 'Usuario criado com sucesso' })
    }

    async update (request, response) {
        const id = request.params.id
        const dados = request.body

        if(dados.password) {
            dados.password = Helpers.generateHashPassword(dados.password)
        } else {
            delete dados.password
        }

        await UserModel.update(dados, { where: { id: id } })
        return response.json({ message: 'Usuario atualizado com sucesso' })
    }

    async delete (request, response) {
        const id = request.params.id
        await UserModel.destroy({ where: { id: id } })
        return response.json({ message: 'Usuario deletado com sucesso' })
    }
}

module.exports = UserController