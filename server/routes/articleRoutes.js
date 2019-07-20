// Importing Dependencies
const express = require('express');
// Importing Contollers
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');
// Express Router
const router = express.Router({ mergeParams: true });

// Recent Articles (top 3)
router.route('/recent-3-articles').get(articleController.getRecent3Articles);

// Article Routes
router.route('/').get(articleController.getAllArticles).post(authController.protect, authController.restrictTo('user', 'admin'), articleController.uploadArticlePhoto, articleController.resizeArticlePhoto, articleController.setUserId, articleController.createArticle);
router.route('/:id').get(articleController.getArticle).patch(authController.protect, authController.restrictTo('user', 'admin'), articleController.updateArticle).delete(authController.protect, authController.restrictTo('user', 'admin'), articleController.deleteArticle);

// Exporting Article Router
module.exports = router;