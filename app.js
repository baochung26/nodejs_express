// app.js

/**
 * Required External Modules
 */

const express = require("express");
require('./config/database');
const path = require("path");
require('dotenv').config();
const routeApi = require('./routes/api')

/**
 * App Variables
 */

const app = express();

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "resources/views"));
app.set('view engine', 'ejs');
app.use(express.json())


/**
 * Routes Definitions
 */
// require('./routes/web')(app);
app.use(routeApi)

module.exports = app