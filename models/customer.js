const Sequelize = require("sequelize");

const db = require("../utils/database");
const Udhari = require("./udhari");

const Customer = db.define("customer", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Customer.hasMany(Udhari, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Customer;
