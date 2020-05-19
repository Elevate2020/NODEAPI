const express = require('express')
const itemController = require('../controllers/itemController')
const itemRouter = express.Router()


itemRouter.get('/items', itemController.getItems);
 itemRouter.get('/item/:itemId?', itemController.getItemById);
 itemRouter.post('/addItem', itemController.addItem);

module.exports = itemRouter