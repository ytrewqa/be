const Student = require("../models/student")


const add_student = async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      const student = await newStudent.save();
      // Returns the new student that is created in the database
      res.json({ student: newStudent }); 
    } catch (error) {
      console.error(error);
    }
  }


  module.exports = add_student