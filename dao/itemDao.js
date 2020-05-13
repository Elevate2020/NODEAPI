const dotenv = require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  })

function getAllUserDB(response) {
    console.log( 'Inside DB access...');
    pool.query('SELECT * FROM item_dev.item_attributes ORDER BY id ASC', (error, results) => {
        if (error) {
            console.log(error.stack)
            throw error
        }
        response.json(results.rows)
    })
}

module.exports = {
    getAllUserDB
  }