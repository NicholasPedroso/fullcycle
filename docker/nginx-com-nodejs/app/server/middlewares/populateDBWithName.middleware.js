const { generatePeople, adaptNamesToQuery } = require("../../utils");
const { TABLE_NAME } = require("../../constants");

module.exports = async function populateDBWithName(_, res, next) {
  const { pool } = res.locals;
  if (!pool) {
    return next({
      source: "populateDBWithName",
      status: 500,
      message: "Unable to connect to database",
      details:
        "Not connected to database when trying to populate DB with names",
    });
  }

  const names = await generatePeople();
  const namesToBeInserted = adaptNamesToQuery(names);

  pool.query(
    `INSERT INTO ${TABLE_NAME} (firstName, lastName) VALUES ${namesToBeInserted};`,
    (err) => {
      if (err) {
        return next({
          source: "populateDBWithName",
          status: 500,
          message: "Unable to write to database",
          details: err,
        });
      }
      next();
    }
  );
};
