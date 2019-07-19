// Importing Dependencies
const mongoose = require('mongoose');
const slugify = require('slugify');

// Article Schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Article title missing'],
        trim: true,
    },
    slug: String,
    content: {
        type: String,
        required: [true, 'Article content missing'],
        trim: true,
    },
    tags: [String],
    coverImage: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Article must belong to a user']
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// * Query Middleware - Populate User
articleSchema.pre(/^find/, function(next) {
    this.populate({
       path: 'user',
       select: 'name photo shortBio' 
    });
    next();
});

// * Query Middleware - Update & Delete Documents
articleSchema.pre(/^findOneAnd/, async function(next) {
    this.r = await this.findOne();
    next();
});

// * Document Middleware - Create a slug
articleSchema.pre('save', function(next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

// Article Model
const Article = mongoose.model('Article', articleSchema);

// Exporting Article Model
module.exports = Article;