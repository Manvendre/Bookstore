const express = require('express');
const { uploadBooks } = require('../controllers/csvController');
const { authenticateSeller } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', authenticateSeller, uploadBooks);

module.exports = router;
