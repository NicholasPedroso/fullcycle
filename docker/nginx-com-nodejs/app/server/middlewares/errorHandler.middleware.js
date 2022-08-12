module.exports = function errorHandler(error, req, res, next) {
  res.send(error);
  res.locals.pool.end();
};