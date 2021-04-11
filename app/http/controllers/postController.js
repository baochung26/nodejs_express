require('dotenv').config();
const Post = require('../../models/post')

// Create post
let createPost = async (req, res) => {
    const post = new Post({
        ...req.body,
        owner: req.user._id
    })
    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
}

// Get list posts
let getListPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('owner')
        posts.forEach(post => {
            console.log(post.owner.name)
        });
        res.send(posts)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}


// post detail
let postDetails = async (req, res) => {
    const _id = req.params.id

    try {
        const post = await Post.findById(_id)

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
}

// Update post
let updatePost = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'content']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(400).send(e)
    }
}

let postController = {
    createPost: createPost,
    getListPosts: getListPosts,
    postDetails: postDetails,
    updatePost: updatePost
}

module.exports = postController