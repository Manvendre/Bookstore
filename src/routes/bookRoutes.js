const express = require('express');
const { addBook, getSellerBooks, updateBook, deleteBook } = require('../controllers/bookController');
const { authenticateSeller } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateSeller, addBook);
router.get('/', authenticateSeller, getSellerBooks);
router.put('/:id', authenticateSeller, updateBook);
router.delete('/:id', authenticateSeller, deleteBook);

module.exports = router;
