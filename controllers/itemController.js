const itemAttrSvc = require('../service/itemService')

  /** Get controller for all Items from DB */
  const getItems = (request, response) => {
    console.log("getItems controller")
    itemAttrSvc.getItemsSvc(response);
    response.status(200);
  }

  /** Get controller to get specific Item from DB */
  const getItemById = (request, response) => {
    console.log("getItemById controller")
    itemAttrSvc.getItemByIdSvc(request.params.itemId, response);
    response.status(200);
  }

  /** Add Item to DB */
  const addItem = (request, response) => {
    console.log("addItem controller..."+request.body)
    itemAttrSvc.addItemSvc(request.body, response);
    response.status(200);
  }
  

  module.exports = {
    getItems,
    addItem,
    getItemById
  }