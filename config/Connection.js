const { Sequelize } = require('sequelize')
require('dotenv').config()

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: process.env.HOST || 'localhost',
//     port:  process.env.PORT || '5432',
//     username:  process.env.USERNAME || 'postgres',
//     password: process.env.PASSWORD || '',
//     database: process.env.DATABASE || 'backend'
// })

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port:  '5432',
//     username: 'postgres',
//     password: '1234',
//     database: 'fs29'
// })

const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cs273be8ii6s739cuv10-a',
    port:  '5432',
    username: 'fs29_user',
    password: 'HWPbiAG22efTO7gx3Wsbh2mOnCXUga8Q',
    database: 'fs29'
})

module.exports = Connection;