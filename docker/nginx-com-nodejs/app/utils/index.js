const { generatePeople } = require("./peopleGenerator.utils");
const { adaptNamesToQuery } = require("./names.utils");
const { disconnectFromDB } = require("./database.utils");

module.exports = {
  generatePeople,
  adaptNamesToQuery,
  disconnectFromDB,
};
