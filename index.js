// index.js

/**
 * Required External Modules
 */

const express = require("express");
require('./config/database');
const path = require("path");
require('dotenv').config();

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "resources/views"));
app.set('view engine', 'ejs');
app.use(express.json())


/**
 * Routes Definitions
 */
require('./routes/web')(app);
require('./routes/api')(app);

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});