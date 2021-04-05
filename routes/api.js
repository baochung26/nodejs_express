
const User = require('../app/models/user');

module.exports = function (app) {

    // index page 
    app.get('/login', function (req, res) {
        res.render('pages/index');
    });

    // about page 
    app.get('/logout', function (req, res) {
        res.render('pages/about');
    });

    //other routes..
}