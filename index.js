// index.js

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
const port = process.env.APP_PORT || "8000";

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

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});