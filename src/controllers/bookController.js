const Book = require('../models/Book');

exports.addBook = async (req, res) => {
  const { title, author, price } = req.body;
  const sellerId = req.user.id;
  try {
    const book = await Book.create({ title, author, price, sellerId });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSellerBooks = async (req, res) => {
  const sellerId = req.user.id;
  try {
    const books = await Book.findAll({ where: { sellerId } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, price } = req.body;
  const sellerId = req.user.id;
  try {
    const book = await Book.findOne({ where: { id, sellerId } });
    if (!book) return res.status(404).json({ error: "Book not found" });

    book.title = title || book.title;
    book.author = author || book.author;
    book.price = price || book.price;
    await book.save();

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const sellerId = req.user.id;
  try {
    const book = await Book.findOne({ where: { id, sellerId } });
    if (!book) return res.status(404).json({ error: "Book not found" });

    await book.destroy();
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
