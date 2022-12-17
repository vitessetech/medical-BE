const Sequelize = require("sequelize");

const db = new Sequelize("ganesh_medical", "root", "Arbaj9898", {
  dialect: "mysql",
  host: "localhost",
});

// Relations

module.exports = db;
