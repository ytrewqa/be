const sequelize = require("../db_connection/connection");
const { Sequelize } = require("sequelize");

const Book = sequelize.define(
  "book",
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    borrowedBy: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    dateOfBorrow: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    expected_return_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    // options
  }
);

// Note: using `force: true` will drop the table if it already exists
// Book.sync({ force: true }); 
module.exports = Book;
