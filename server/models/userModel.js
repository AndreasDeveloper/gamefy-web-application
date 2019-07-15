// Importing Node Modules
const crypto = require('crypto');
// Importing Dependencies
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid email']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    shortBio: {
        type: String,
        default: 'No user bio',
        trim: true
    },
    longBio: {
        type: String,
        default: 'No user summary',
        trim: true
    },
    photo: {
        type: String,
        default: 'default.jpg'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must have minimum of 8 characters'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Confirm your password'],
        validate: {
            // Validate Passwords
            validator: function(el) {
                return el === this.password;
            },
            message: 'Password didn\'t match'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    followers: {
        type: Number,
        default: 0
    },
    userGithub: String,
    userLinkedin: String
});

// ---- MIDDLEWARE FUNCTIONS ---- \\

// Pre Middleware for Encrypting Password
userSchema.pre('save', async function(next) {
    // If password is not modified, return
    if (!this.isModified('password')) return next();

    // Encrypt password
    this.password = await bcrypt.hash(this.password, 12); // Hash
    this.passwordConfirm = undefined; // Delete password confirm field
    next();
});

// Pre Middleware for updating passwordChangedAt field
userSchema.pre('save', function(next) {
    if (!this.isModified('password') || this.isNew) return next(); // if password is not modified, or if document is new

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

// Pre Middleware for excluding inactive users (deleted)
userSchema.pre(/^find/, function(next) {
    this.find({ active: { $ne: false } });
    next();
});


// Instance Method - Validate password and hashed password (check equality)
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance Method - Check if user changed password before / after JWT was issued
userSchema.methods.changePasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

        return JWTTimestamp < changedTimestamp;
    }
    return false; // default - return not changed (false)
};

// Instance Method - Create Password Reset token
userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex'); // create random token
    // Encrypt reset token
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 Minutes Expiration

    // Return reset token for email
    return resetToken;
};


// User Model
const User = mongoose.model('User', userSchema);

// Exporting User Model
module.exports = User;