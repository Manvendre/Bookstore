const express = require('express');
const { getAllBooks, getBookById } = require('../controllers/bookViewController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateUser, getAllBooks);
router.get('/:id', authenticateUser, getBookById);

module.exports = router;
