/* eslint-disable */ 

// Importing Dependencies
const { promisify } = require('util'); 
const jwt = require('jsonwebtoken');
// Importing Models
const User = require('../models/userModel');
// Importing Utilities
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


// GET - Account Page Middleware (If user is logged in redirect, if not redirect accordingly)
exports.getAccountPage = (req, res, next) => {
    if (!req.cookies.jwt) {
        res.redirect('/login');
        next();
    }
    return next();
};