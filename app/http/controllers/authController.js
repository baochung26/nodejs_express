require('dotenv').config();
const User = require('../../models/user')


exports.login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            "access_token": token,
            "token_type": "bearer",
            "expires_in": process.env.JWT_EXPIRES_IN
        })
    } catch (e) {
        res.status(400).send()
    }
}


exports.me = async (req, res) => {
    res.send(req.user)
};


exports.refresh_token = async (req, res) => {
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


exports.logout = async (req, res) => {
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

exports.logout_all = async (req, res) => {
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