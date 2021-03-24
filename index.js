// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
require('dotenv').config();

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
const router = express.Router()

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


/**
 * Routes Definitions
 */
require('./routes/web')(app);

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});