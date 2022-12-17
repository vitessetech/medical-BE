const Sequelize = require("sequelize");

const db = require("../utils/database");
const Product = require("./product");

const Udhari = db.define("udhari", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  paid: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

Udhari.hasMany(Product);

module.exports = Udhari;
