const  Sequelize  = require("sequelize");
const sequelize = require("../db_connection/connection.js");

const Student = sequelize.define(
  "student",
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // options
  }
);
// Note: using `force: true` will drop the table if it already exists
// Student.sync({ force: true }); // Now the `students` table in the database corresponds to the model definition

module.exports = Student;
