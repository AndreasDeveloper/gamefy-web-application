// Importing Dependencies
const multer = require('multer');
const sharp = require('sharp');
// Importing Models
const User = require('../models/userModel');
// Importing Controllers
const factory = require('../controllers/handleFactory');
// Importing Utilities
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


// ---- Helper Function For Filtering Objects ---- \\

// Function for filtering objects / keys
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};

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
exports.uploadUserPhoto = upload.single('photo');
// Middleware function for resizing photos
exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    // Save filename on file object
    req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

    // Resize image
    await sharp(req.file.buffer)
        .resize(500, 500) 
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`assets/images/users/${req.file.filename}`);

    next();
});

// ---- Handler Functions for Users ---- \\

// GET - Currently Authenticated User
exports.getAccount = (req, res, next) => { // Middleware function for setting params id to user id
    req.params.id = req.user.id;
    next();
};

// GET - Specific User
exports.getUser = factory.getOne(User, { path: 'articles' });

// PATCH - Currently Authenticate User
exports.updateAccount = catchAsync(async (req, res, next) => {
    // Display error if user POSTs password
    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('Cannot update password on this route. Use /updatePassword to update password', 400));
    }

    // Update user document | Filter Out
    const filteredBody = filterObj(req.body, 'name', 'email', 'location', 'shortBio', 'longBio', 'userGithub', 'userLinkedin');
    if (req.file) filteredBody.photo = req.file.filename;

    // Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true });

    // Sending Status & JSON
    res.status(200).json({
        status: 'success',
        user: updatedUser
    });
});

// DELETE - Currently Logged in user
exports.deleteAccount = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });
    // Removing Cookie
    res.cookie('jwt', 'deleted', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    // Sending Status & JSON
    res.status(204).json({ 
        status: 'success',
        data: null
    });
});


// -- API Handlers -- \\

// POST - New User
exports.createUser = (req, res) => {
    res.status(500).json({ // 500 - Internal Server Error
        status: 'error',
        message: 'Route not defined. Use /signup instead.'
    });
};

// GET - All Users - Administrator Only
exports.getAllUsers = factory.getAll(User);

// PATCH - Specific User - Administrator Only
exports.updateUser = factory.updateOne(User);

// DELETE - Specific User - Administrator Only 
exports.deleteUser = factory.deleteOne(User);