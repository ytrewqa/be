const Book = require("../models/book")


const add_book = async (req, res) => {
    try {
      const newBook = new Book(req.body);
      await newBook.save();
  
      // Returns the new student that is created in the database
      res.json({ book: newBook }); 
    } catch (error) {
      console.error(error);
    }
  }


  module.exports = add_book