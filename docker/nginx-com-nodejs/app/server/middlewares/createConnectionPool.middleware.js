const mysql = require("mysql2");

module.exports = function createConnectionPool(req, res, next) {
  try {
    const pool = mysql.createPool({
      connectionLimit: 10,
      host: "db",
      port: 3306,
      database: "fullcycle",
      user: "root",
      password: "123",
    });
    res.locals.pool = pool;
    next();
  } catch (e) {
    const error = {
      status: 500,
      message: "Unable to create pool",
      details: e,
    };
    return next(error);
  }
};
