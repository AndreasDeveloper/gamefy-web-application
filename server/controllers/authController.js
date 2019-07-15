// Importing Dependencies
const crypto = require('crypto');
const { promisify } = require('util'); 
const jwt = require('jsonwebtoken');
// Importing Models
const User = require('../models/userModel');
// Importing Utils
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


// Function For Signing Tokens
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

// Function For Sending Status & JSON + Creating (Signing) JWT
const createSendToken = (user, statusCode, res) => {
    // Log the user in, send JWT
    const token = signToken(user.id);

    // Setting cookie options
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    // Inserting JWT to Cookies
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true; // cookie will show only on https
    res.cookie('jwt', token, cookieOptions);

    // Remove password from the output
    user.password = undefined;

    // Sending Status & JSON
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
};


// POST - Sign up user
exports.signup = catchAsync(async (req, res, next) => {
    // Creating new User
    const newUser = await User.create(req.body);

    // Sending Status & JSON
    createSendToken(newUser, 201, res);
});