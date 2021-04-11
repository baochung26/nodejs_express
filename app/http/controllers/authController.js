require('dotenv').config();
const { User, UserRoles } = require('../../models/user')


let login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            "access_token": token,
            "token_type": "bearer",
            "expires_in": process.env.JWT_EXPIRES_IN
        })
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
}


let me = async (req, res) => {
    res.send(req.user)
};


let refreshToken = async (req, res) => {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
    })
    await req.user.save()
    const token = await req.user.generateAuthToken()
    res.send({
        "access_token": token,
        "token_type": "bearer",
        "expires_in": process.env.JWT_EXPIRES_IN
    })
};


let logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send({
            "message": "Successfully logged out"
        })
    } catch (e) {
        res.status(500).send()
    }
};

let logoutAll = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({
            "message": "Successfully logged out all divices."
        })
    } catch (e) {
        res.status(500).send()
    }
};

let authController = {
    login: login,
    me: me,
    refreshToken: refreshToken,
    logout: logout,
    logoutAll: logoutAll
}

module.exports = authController