// Importing Dependencies
const express = require('express');
// Importing Controllers
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
// Declaring express Router
const router = express.Router();

// Routes

router.get('/', authController.isLoggedIn);
// GET - Login Page
router.get('/login', authController.isLoggedIn);
// GET - User Account
router.get('/account', authController.isLoggedIn, viewsController.getAccountPage);

// Exporting View Router
module.exports = router;