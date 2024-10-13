const { Op } = require("sequelize");
const UserModel = require("../models/UserModel");
const Helpers = require("../helpers/Helpers");

class UserController {
  async findAll(request, response) {
    const { pesquisa } = request.query;
    const lista = await UserModel.findAll({
      attributes: ["id", "name", "login"],
      where: {
        name: {
          [Op.iLike]: `%${pesquisa}%`,
        },
      },
    });
    return response.json(lista);
  }

  async findId(request, response) {
    const id = request.params.id;
    const dado = await UserModel.findByPk(id, {
      attributes: ["id", "name", "login"],
    });
    return response.json(dado);
  }

  async create(request, response) {
    try {
      const dados = request.body;
      // use await to handle the asynchronous hash operation
      dados.password = await Helpers.generateHashPassword(dados.password);
      
      await UserModel.create(dados);
      return response.json({ message: "Usuario criado com sucesso" });
    } catch (e) {
      return response.status(500).json({ message: e });
    }
  }

  async update(request, response) {
    const id = request.params.id;
    const dados = request.body;

    if (dados.password) {
      dados.password = await Helpers.generateHashPassword(dados.password);
    } else {
      delete dados.password; // remove the password field if not updating it
    }

    await UserModel.update(dados, { where: { id: id } });
    return response.json({ message: "Usuario atualizado com sucesso" });
  }

  async delete(request, response) {
    const id = request.params.id;
    await UserModel.destroy({ where: { id: id } });
    return response.json({ message: "Usuario deletado com sucesso" });
  }
}

module.exports = UserController;
