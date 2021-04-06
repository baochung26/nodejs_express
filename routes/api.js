const auth = require('../app/http/middleware/auth')
const authController = require('../app/http/controllers/authController')
const userController = require('../app/http/controllers/userController')

module.exports = function (app) {

    // login
    app.post('/login', authController.login)

    // Login user info
    app.get('/me', auth, authController.me)

    // Refresh token
    app.post('/refresh-token', auth, authController.refreshToken)

    // Logout
    app.post('/logout', auth, authController.logout)

    // Logout all
    app.post('/logout-all', auth, authController.logoutAll)

    // create user
    app.post('/users', userController.createUser)

    // get all user
    app.get('/users', userController.getListUsers)

    // find user by id
    app.get('/users/:id', userController.userDetails)

    // update user
    app.patch('/users/:id', userController.updateUser)

}