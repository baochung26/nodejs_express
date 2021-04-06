
const User = require('../app/models/user')
const auth = require('../app/http/middleware/auth')
const { login, me, refresh_token, logout, logout_all } = require('../app/http/controllers/authController')
const { createUser, gitListUsers, userDetails, updateUser } = require('../app/http/controllers/userController')

module.exports = function (app) {

    // login
    app.post('/login', login)

    // Login user info
    app.get('/me', auth, me)

    // Refresh token
    app.post('/refresh-token', auth, refresh_token)

    // Logout
    app.post('/logout', auth, logout)

    // Logout all
    app.post('/logout-all', auth, logout_all)

    // create user
    app.post('/users', createUser)

    // get all user
    app.get('/users', gitListUsers)

    // find user by id
    app.get('/users/:id', userDetails)

    // update user
    app.patch('/users/:id', updateUser)

}