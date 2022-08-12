const express = require("express");
const app = express();

const { disconnectFromDB } = require("../utils");
const { createConnectionPool, populateDBWithName, errorHandler, getNamesFromDB } = require("./middlewares");

app.get("/", createConnectionPool, populateDBWithName, getNamesFromDB, (req, res) => {
  const { names, pool } = res.locals;
  let namesList = names.reduce((acc, {firstName, lastName}) => acc += `<li>${firstName} ${lastName}</li>`, '')

  res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${namesList}
    </ul>
  `);

  return disconnectFromDB(pool);
});

app.get("/ping", (req, res) => res.send("pong"));

app.use(errorHandler)

module.exports = app;
