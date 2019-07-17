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

// POST - Login User
exports.login = catchAsync(async (req, res, next) => {
    // Defining Variables
    const { email, password } = req.body;

    // Check if email & password exists
    if (!email || !password) {
        return next(new AppError('Provide email and password', 400));
    }
    // Find user and get email and password fields
    const user = await User.findOne({ email }).select('+password');

    // Check if user exist and if password is correct
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401)); // Unathorized
    }

    // Sending Status & JSON
    createSendToken(user, 200, res);
});

// GET - Logout User
exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).json({
        status: 'success'
    });
};


// Middleware For Authorization
exports.protect = catchAsync(async (req, res, next) => {
    // Get the token and check if exists
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // For API
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    // If token doesn't exist
    if (!token) {
        return next(new AppError('You must be logged in', 401));
    }

    // Vefiricate Token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user exist
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('The user belonging to this token no longer exists', 401));
    }

    // Check if user changed password after the JWT was issued
    if (currentUser.changePasswordAfter(decoded.iat)) { // iat - issued at
        return next(new AppError('User password changed recently. Log in again', 401));
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
});

// Middleware For Restricting users on specific routes
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('No permission to perform this action', 403)); // 403 - Forbidden
        }

        next();
    };
};

// Middleware for updating password - logged in users
exports.updatePassword = catchAsync(async (req, res, next) => {
    // Get user 
    const user = await User.findById(req.user.id).select('+password');
  
    // Check if posted password is correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('Current password is incorrect', 401));
    }
  
    // If password is correct, update the password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
  
    // Sending Status & JSON
    createSendToken(user, 200, res);
});

// Middleware For checking if user is logged in (for rendering pages)
exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // Verificate token that is stored in cookie
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET); // returns promise & awaits it right away

            // Check if user exists
            const currentUser = await User.findById(decoded.id); // decoded holds id in its payload 
            if (!currentUser) {
                return next();
            }

            // Check if user changed password after the JWT was issued
            if (currentUser.changedPasswordAfter(decoded.iat)) { // iat - issued at
                return next();
            }
            // There is a logged in user
            res.locals.user = currentUser;
            return next();
        } catch (err) {
            return next();
        }
    }
    next();
};