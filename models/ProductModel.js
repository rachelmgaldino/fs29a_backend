const { DataTypes } = require('sequelize')
const Connection = require('../config/Connection');
const UserModel = require('./UserModel');

const ProductModel = Connection.define(
    'ProductModel',
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image_path: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date_valid: {
            type: DataTypes.DATE,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        }
    },
    {
        tableName: 'products'
    }
);

module.exports = ProductModel;