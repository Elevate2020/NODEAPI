/** Item model class */
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
        manufacturerId: type.STRING,
        manufacturerName: type.STRING,
        rating: type.STRING,
        color: type.STRING,
        height: type.STRING,
        weight: type.STRING,
        units: type.STRING,
        brand: type.STRING,
        vendor: type.STRING,
        isFragile: type.STRING,
        isReturnable: type.STRING,
        isHazardous: type.STRING,
        status:type.STRING
    })
}