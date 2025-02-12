const express = require('express');
const router = express.Router();
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

// Enable CORS
router.use(cors());

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'images'
});

// Test database connection
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to database successfully');
  }
});

// Configure multer for image upload with error handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/') // Ensure this path is correct and directory exists
  },
  filename: function (req, file, cb) {
    cb(null, 'item-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5000000 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
}).single('image');

// Modified upload route with detailed error handling
router.post('/upload-found-item', (req, res) => {
  upload(req, res, function(err) {
    // Multer error handling
    if (err) {
      console.error('Multer Error:', err);
      return res.status(400).json({
        error: err.message,
        location: 'file upload'
      });
    }

    // Check if file exists
    if (!req.file) {
      console.error('No file uploaded');
      return res.status(400).json({
        error: 'Please select an image to upload',
        location: 'file validation'
      });
    }

    // Log form data for debugging
    console.log('Form data received:', req.body);
    console.log('File received:', req.file);

    const {
      'item-name': itemName,
      category,
      description,
      location
    } = req.body;

    // Validate required fields
    if (!itemName || !category || !description || !location) {
      console.error('Missing required fields:', { itemName, category, description, location });
      return res.status(400).json({
        error: 'All fields are required',
        location: 'form validation'
      });
    }

    const imagePath = req.file.path;
    const uploadDate = new Date();

    // SQL query with error logging
    const query = `
      INSERT INTO found_items 
      (item_name, category, description, location, image_path, upload_date)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(
      query,
      [itemName, category, description, location, imagePath, uploadDate],
      (error, results) => {
        if (error) {
          console.error('Database Error:', error);
          return res.status(500).json({
            error: 'Database error occurred',
            details: error.message,
            location: 'database'
          });
        }

        console.log('Upload successful:', results);
        res.status(200).json({
          message: 'Item uploaded successfully',
          itemId: results.insertId,
          filepath: imagePath
        });
      }
    );
  });
});

module.exports = router;