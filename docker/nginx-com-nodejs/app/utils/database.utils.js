exports.disconnectFromDB = function disconnectFromDB(pool) {
  pool.end((error) => {
    if (error) {
      return next({
        source: 'disconnectFromDB',
        status: 500,
        error: "Error trying to disconnect from database",
        details: error,
      });
    }
  });
};