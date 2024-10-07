const Connection = require('../config/Connection')

require('../models/UserModel')
require('../models/PostModel')
require('../models/ProductModel')
require('../models/CategoryModel')

Connection.sync({ force: false })