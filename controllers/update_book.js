const Book = require("../models/book")


const update_book = async (req, res) => {
    try {
      const id = req.params.id;
      const update = req.body;
      const updated_book = await Book.update(
        { ...update },
        { where: { id: id } }
      );
      res.json({ book: updated_book });
    } catch (error) {
      console.error(error);
    }
  };


  module.exports = update_book