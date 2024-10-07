const Connection = require('../config/Connection')
const { DataTypes } = require('sequelize')
const UserModel = Connection.define(
    "UserModel", 
    {
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        login: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, 
    {
        tableName: 'users'
    }
)
module.exports = UserModel
