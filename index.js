const express = require('express');
const cookieSession = require('cookie-session');
// Passport required for Oauth login
const passport = require('passport');
const keys = require('./config/key');
const bodyParser = require('body-parser');

require('./models/User');
require('./services/passport');
require('./config/mongoose');

const app = express();
app.use(bodyParser.json());

app.use(
    cookieSession({
        // Remember session for 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);


app.use(passport.initialize());
app.use(passport.session());

require('./routes/contactRoutes')(app);
require('./routes/authRoutes')(app);

app.listen(8000);