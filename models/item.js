/** Item model */
module.exports = (sequelize, type) => {
    return sequelize.define('item', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        description: type.STRING,
        abbreviation: type.STRING,
        manufacturer_id: type.STRING,
        manufacturer_name: type.STRING,
        manufactured_date: type.DATE,
        expiry_date: type.DATE,
        purchase_date: type.DATE,
        rating: type.STRING,
        color: type.STRING,
        height: type.STRING,
        weight: type.STRING,
        units_per_pack: type.STRING,
        brand: type.STRING,
        vendor_case_pack: type.STRING,
        is_fragile: type.STRING,
        is_returnable: type.STRING,
        is_item_hazardous: type.STRING,
        status: type.STRING
    },{
    tableName: 'item_attribute',
    schema:'item_dev'
    })
}