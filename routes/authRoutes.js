const passport = require('passport');

module.exports = app => {

    app.get('/auth/google', passport.authenticate('google', {
        // Scope determines what information we will need from google user
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/contacts');
    });

    app.get('/api/logoff', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        
        res.send(req.user);
    });
};