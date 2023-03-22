const Sequelize = require("sequelize");

const db = new Sequelize("dbms", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

// Relations

module.exports = db;
