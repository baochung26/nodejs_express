const express = require('express')
const router = new express.Router()

const authMiddleware = require('../app/http/middleware/auth')
const authController = require('../app/http/controllers/authController')
const userController = require('../app/http/controllers/userController')
const postController = require('../app/http/controllers/postController')


// create user
router.post('/users', userController.createUser)

// login
router.post('/login', authController.login)

// Login user info
router.get('/me', [authMiddleware], authController.me)

// Refresh token
router.post('/refresh-token', [authMiddleware], authController.refreshToken)

// Logout
router.post('/logout', [authMiddleware], authController.logout)

// Logout all
router.post('/logout-all', [authMiddleware], authController.logoutAll)

// get all user
router.get('/users', userController.getListUsers)

// find user by id
router.get('/users/:id', userController.userDetails)

// update user
router.patch('/users/:id', userController.updateUser)

// create post
router.post('/posts', [authMiddleware], postController.createPost)

// get all user
router.get('/posts', [authMiddleware], postController.getListPosts)


router.get('/test-helper', postController.helperTest)

module.exports = router