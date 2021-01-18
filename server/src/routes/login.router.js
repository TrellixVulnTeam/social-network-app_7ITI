const express = require('express')
const router = express.Router()
const loginController = require('../controller/login.controller.js')

router.post('/' , loginController.login)
module.exports = router