const express = require('express')
const AuthRouter = express.Router()
const AuthCtrl = require('../controllers/auth-ctrl')
// define the home page route
AuthRouter.post('/login', AuthCtrl.login)
// define the about route
AuthRouter.post('/create', AuthCtrl.createAccount)

module.exports = AuthRouter