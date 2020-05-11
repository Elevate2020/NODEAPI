const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/getUsers', userController.getUsers);
userRouter.post('addUser', userController.getUsers)
module.exports = userRouter