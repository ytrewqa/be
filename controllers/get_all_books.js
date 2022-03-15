const Book = require("../models/book")

const get_books = async (req, res) => {
    try {
      const books = await Book.findAll({})
      res.json({ books: books }); 
    } catch (error) {
      console.error(error);
    }
  }


  module.exports = get_books