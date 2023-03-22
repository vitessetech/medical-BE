const Sequelize = require("sequelize");

const db = require("../utils/database");

const Banner = db.define("banner", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Banner;
