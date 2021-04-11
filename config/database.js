const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})