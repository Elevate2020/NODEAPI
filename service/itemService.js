const itemOrm = require('../dao/itemOrmDao')

  /** Get controller for all Items from DB */
  function  getItemsSvc(response){
    itemOrm.getAllItems(response);
    response.status(200);
  }

  /** Get controller to get specific Item from DB */
  function getItemByIdSvc(itemId, response){
    itemOrm.getItemsById(itemId, response);
    response.status(200);
  }

  /** Add Item to DB */
  function addItemSvc (itemAttrJson, response) {
    itemOrm.addItem(itemAttrJson, response);
    response.status(200);
  }
  

  module.exports = {
    getItemsSvc,
    addItemSvc,
    getItemByIdSvc
  }