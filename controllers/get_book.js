const Book = require("../models/book");

const get_book = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findOne({ where: { id: id } });

    res.json({ book: book });
  } catch (error) {
    console.error(error);
  }
};

module.exports = get_book;
