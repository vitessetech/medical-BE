const Sequelize = require("sequelize");

const db = require("../utils/database");

const Product = db.define("product", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // todo : add udhariId here as foregn Key
});

module.exports = Product;
