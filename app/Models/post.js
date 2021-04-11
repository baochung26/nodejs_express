const mongoose = require('mongoose')
require('dotenv').config();


const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

// Hash the plain text password before saving
postSchema.pre('save', async function (next) {
    const post = this
    post.updated_at = Date.now

    next()
})



const Post = mongoose.model('Posts', postSchema)

module.exports = Post