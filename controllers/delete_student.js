const Student = require("../models/student");

const delete_student = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted_rows = await Student.destroy({ where: { id: id } });
    res.json({ deleted_rows: deleted_rows });
  } catch (error) {
    console.error(error);
  }
};

module.exports = delete_student;
