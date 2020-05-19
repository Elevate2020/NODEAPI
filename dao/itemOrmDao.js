const { Item } = require('./sequelize')

/** Get all Items from DB */
function getAllItems(response) {
    console.log( 'Inside ORM DB access...');
    Item.findAll().then(items => response.json(items))
}

/** Get Item based in Item id */
function getItemsById(itemId, response) {
    console.log( 'Inside ORM DB access...   '+itemId);
    if(itemId){
        Item.findAll({ where: { id: itemId } }).then(item => response.json(item));
    }else{
        Item.findAll().then(items => response.json(items))
    }
}

/** Add Item to database */
function addItem(jsonRequest, response) {
    console.log('Add Item Dao  ' +jsonRequest)
    Item.create(jsonRequest)
        .then(item => response.json(item))
}

module.exports = {
    getAllItems,
    addItem,
    getItemsById
  }