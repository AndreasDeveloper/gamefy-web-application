// Importing Dependencies
const express = require('express');
// Importing Controllers
const authController = require('../controllers/authController');
// Declaring express Router
const router = express.Router();

// Authentication Routes
router.post('/signup', authController.signup);

// Exporting Users Router
module.exports = router;