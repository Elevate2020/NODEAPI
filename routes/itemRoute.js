const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/items', userController.getUsers);
userRouter.get('/item/{itemId}', userController.getUsers);

module.exports = userRouter