const Student = require("../models/student")


const get_students = async (req, res) => {
    try {
      const students = await Student.findAll({})
      console.log(students)
      res.json({ students: students }); 
    } catch (error) {
      console.error(error);
    }
  }

  module.exports = get_students