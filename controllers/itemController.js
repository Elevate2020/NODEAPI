const userOrm = require('../dao/itemOrmDao')

  /** Get controller for all Items from DB */
  const getItems = (request, response) => {
    console.log("getItems controller")
    userOrm.getAllItems(response);
    response.status(200);
  }

  /** Get controller to get specific Item from DB */
  const getItemById = (request, response) => {
    console.log("getItemById controller"+request.params.itemId)
    userOrm.getItemsById(request.params.itemId, response);
    response.status(200);
  }

  /** Add Item to DB */
  const addItem = (request, response) => {
    console.log("addItem controller..."+request.body)
    userOrm.addItem(request.body, response);
    response.status(200);
  }
  

  module.exports = {
    getItems,
    addItem,
    getItemById
  }