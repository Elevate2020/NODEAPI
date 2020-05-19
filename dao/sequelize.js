const dotenv = require('dotenv').config()
const Pool = require('pg').Pool
const { Sequelize } = require('sequelize');

const ItemModel = require('../models/item')

/** Create database connection pool */
const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

  /** Model mapping */
  const Item = ItemModel(sequelize, Sequelize)

  // sequelize.sync({ force: true })
  // .then(() => {
  //   console.log(`Database & tables created!`)
  // })

module.exports = {
  Item
}