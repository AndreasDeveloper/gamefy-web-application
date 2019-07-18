// Importing Dependencies
const express = require('express');
// Importing Controllers
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
// Declaring express Router
const router = express.Router();

// Authentication Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use(authController.protect); 
// User Data
router.get('/account', userController.getAccount, userController.getUser);
router.patch('/updatePassword', authController.updatePassword);
router.patch('/updateAccount', userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updateAccount);
router.delete('/deleteAccount', userController.deleteAccount);

router.use(authController.restrictTo('admin'));
// User Routes - API
router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

// Exporting Users Router
module.exports = router;