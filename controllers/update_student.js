const Student = require("../models/student");

const update_student = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const updated_student = await Student.update(
      { ...update },
      { where: { id: id } }
    );
    res.json({ student: updated_student });
  } catch (error) {
    console.error(error);
  }
};

module.exports = update_student;
