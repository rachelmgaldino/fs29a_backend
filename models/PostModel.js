const Connection = require('../config/Connection')
const { DataTypes } = require('sequelize')

const PostModel = Connection.define(
    "PostModel", 
    {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, 
    {
        tableName: 'posts'
    }
)
module.exports = PostModel
