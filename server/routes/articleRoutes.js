// Importing Dependencies
const express = require('express');
// Importing Contollers
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');
// Express Router
const router = express.Router({ mergeParams: true });

router.use(authController.protect);
// Article Routes
router.route('/').get(articleController.getAllArticles).post(authController.restrictTo('user', 'admin'), articleController.uploadArticlePhoto, articleController.resizeArticlePhoto, articleController.setUserId, articleController.createArticle);
router.route('/:id').get(articleController.getArticle).patch(authController.restrictTo('user', 'admin'), articleController.updateArticle).delete(authController.restrictTo('user', 'admin'), articleController.deleteArticle);

// Exporting Article Router
module.exports = router;