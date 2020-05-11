const userDao = require('../dao/userDao')

const getUsers = (request, response) => {
    console.log("getUsers controller")
    userDao.getAllUserDB(response);
    response.status(200);
  }

const addUsers = (request, response) => {
    console.log("addUsers controller...")
    userDao.addUserDB(response);
    response.status(200);
  }
  

  module.exports = {
    getUsers,
    addUsers
  }