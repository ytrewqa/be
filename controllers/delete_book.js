const Book = require("../models/book");

const delete_book = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted_rows = await Book.destroy({ where: { id: id } });
    res.json({ deleted_rows: deleted_rows });
  } catch (error) {
    console.error(error);
  }
};

module.exports = delete_book;
