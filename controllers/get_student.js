const Student = require("../models/student");

const get_student = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ where: { id: id } });

    res.json({ student: student });
  } catch (error) {
    console.error(error);
  }
};

module.exports = get_student;
