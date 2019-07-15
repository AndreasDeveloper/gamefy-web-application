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


// ---- Handler Functions for Users ---- \\

// GET - Currently Authenticated User
exports.getAccount = (req, res, next) => { // Middleware function for setting params id to user id
    req.params.id = req.user.id;
    next();
};

// PATCH - Currently Authenticate User
exports.updateAccount = catchAsync(async (req, res, next) => {
    // Display error if user POSTs password
    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('Cannot update password on this route. Use /updatePassword to update password', 400));
    }

    // Update user document | Filter Out
    const filteredBody = filterObj(req.body, 'name', 'email', 'location', 'shortBio');

    // Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true });

    // Sending Status & JSON
    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    });
});

// GET - Specific User
exports.getUser = factory.getOne(User);



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