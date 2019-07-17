const path = require('path');
// Importing Dependencies
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
// Importing Controllers
const globalErrorHandler = require('./controllers/errorController');
// Importing Utilities
const AppError = require('./utils/appError');
// Importing Routers
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();


// Setting Template Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// -- Middlewares -- \\

// Helmet | HTTP Headers + 
app.use(helmet());
// Morgan | Logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Express Rate Limit | Limit on requests
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, try again in 1 hour'
});
app.use('/api', limiter);
// JSON / Body Parser
app.use(express.json({ limit: '10kb' })); // Payload body limit
// Parsing URL Encoded Data
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
// Cookie Parser
app.use(cookieParser());
// Data Sanitization against SQL/NoSQL query injection attacks
app.use(mongoSanitize());
// Data Sanitization against XSS attacks
app.use(xss());

// TEST MIDDLEWARE
app.use((req, res, next) => {
    // console.log('Middleware Test');
    next();
});

// -- ROUTES -- \\

// Express Router - View Routes
app.use('/', viewRouter);

// Express Router - API Routes
app.use('/api/v1/users', userRouter);

// Handling Not Found Pages (404)
// app.all('*', (req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
// });

// Global Error Handling Middleware
app.use(globalErrorHandler);

// Exporting App
module.exports = app;