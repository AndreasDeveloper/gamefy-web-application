// Importing Dependencies
const multer = require('multer');
const sharp = require('sharp');
// Importing Models
const Article = require('../models/articleModel');
// Importing Controllers
const factory = require('./handleFactory');
// Importing Utilities
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


// ---- Image Uploads and Manipulation | Multer ---- \\

// Multer Storage
const multerStorage = multer.memoryStorage(); // Buffer save

// Multer Filter | Check file type
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('File is not a image type', 400), false);
    }
};

// Multer Upload
const upload = multer({  
    storage: multerStorage,
    fileFilter: multerFilter
});

// Upload photo middleware function
exports.uploadArticlePhoto = upload.single('coverImage');
// Middleware function for resizing photos
exports.resizeArticlePhoto = catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    // Save filename on file object
    req.body.coverImage = `article-${req.user.id}-${Date.now()}-cover.jpeg`;

    // Resize image
    await sharp(req.file.buffer)
        .resize(2000, 1333) 
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`assets/images/articles/${req.body.coverImage}`);

    next();
});

// GET - All Articles
exports.getAllArticles = factory.getAll(Article);

// GET - Specific Article
exports.getArticle = factory.getOne(Article);

// POST - New Article
exports.setUserId = (req, res, next) => {
    if (!req.body.user) req.body.user = req.user.id;
    next();
};
exports.createArticle = factory.createOne(Article);

// PATCH - Specific Article
exports.updateArticle = factory.updateOne(Article);

// DELETE - Specific Article
exports.deleteArticle = factory.deleteOne(Article);