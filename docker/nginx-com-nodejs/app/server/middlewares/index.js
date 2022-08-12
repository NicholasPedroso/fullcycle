const createConnectionPool = require('./createConnectionPool.middleware')
const populateDBWithName = require('./populateDBWithName.middleware')
const getNamesFromDB = require('./getNamesFromDB.middleware')
const errorHandler = require('./errorHandler.middleware')

module.exports = {
  createConnectionPool,
  populateDBWithName,
  getNamesFromDB,
  errorHandler,
};
