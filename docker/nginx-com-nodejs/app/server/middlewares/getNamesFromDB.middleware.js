const { TABLE_NAME } = require("../../constants");

module.exports = function getNamesFromDB(req, res, next) {
  const { pool } = res.locals;
  pool.query(`SELECT * FROM ${TABLE_NAME}`, function (error, results, fields) {
    if (error)
      return next({
        source: "getNamesFromDB",
        status: 500,
        message: "Unable to get names from DB",
        details: error,
      });
    res.locals.names = results;
    return next();
  });
};
