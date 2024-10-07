const Helpers = require('../helpers/Helpers');
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken');
class AuthController {

    async login(request, response) {

        try {

            const body = request.body;
            const { login, password } = body;
            const criptoPassword = Helpers.generateHashPassword(password)

            const dados = await UserModel.findOne({
                where: {
                    login: login,
                    password: criptoPassword
                }
            })
            
            if(dados) {
                const token = jwt.sign({ 
                    login: dados.login, 
                    exp: Math.floor(Date.now() / 1000) + 60 * 60,
                    }, 
                    process.env.APP_KEY
                );

                return response.json({ 
                    message: 'Login realizado com sucesso', 
                    token: token, tempo: Math.floor(Date.now() / 1000) + 15 });
            } else {
                return response.status(403).send("Login ou senha incorreto")
            }

        } catch(e) {
            return response.status(500).json({ message: e.message}) 
        }
        
    }
}

module.exports = AuthController