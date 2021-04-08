const jwt = require('jsonwebtoken')
require('dotenv').config();
const { User } = require('../../models/user')

const authMiddleware = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error('User not found.')
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Invalid token.' })
    }

}
module.exports = authMiddleware