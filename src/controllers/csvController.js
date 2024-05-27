const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const Book = require('../models/Book');

const upload = multer({ dest: 'uploads/' });

exports.uploadBooks = [
  upload.single('file'),
  (req, res) => {
    const sellerId = req.user.id;
    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on('data', (data) => results.push({ ...data, sellerId }))
      .on('end', async () => {
        try {
          await Book.bulkCreate(results);
          res.json({ message: 'Books uploaded successfully' });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
  }
];
