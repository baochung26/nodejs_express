const User = require('../app/models/user');

module.exports = function (app) {

    // index page 
    app.get('/', function (req, res) {
        res.render('pages/index');
    });

    // about page 
    app.get('/about', function (req, res) {
        res.render('pages/about');
    });

    // about page 
    app.post('/login', function (req, res) {
        res.render('pages/about');
    });

    //other routes..
};