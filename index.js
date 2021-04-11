const app = require('./app')
const port = process.env.APP_PORT || "8000";

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});