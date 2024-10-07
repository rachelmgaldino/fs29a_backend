const { DataTypes } = require('sequelize')
const Connection = require('../config/Connection')
const CategoryModel = Connection.define(
    "CategoryModel",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    },
    {
        tableName: 'categories'
    }
)
module.exports = CategoryModel;