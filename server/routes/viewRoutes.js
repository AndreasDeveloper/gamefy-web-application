// Importing Dependencies
const express = require('express');
// Importing Controllers
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
// Declaring express Router
const router = express.Router();

// Routes

// GET - User Account
router.get('/account', authController.protect);

// Exporting View Router
module.exports = router;