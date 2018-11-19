const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/key');

const mongoose = require('mongoose');
const User = mongoose.model('User');

// Determining the user object to be stored in session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize User id and turn back into User
passport.deserializeUser((id, done) => {
    User.findById(id)
    // Promise Callback
        .then(user => {
            done(null, user);
        });
});

// new Google Instance
passport.use(
    new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // After user information comes back, redirect to this callback URL
        callbackURL: '/auth/google/callback',
        proxy: true
    },

        async (accessToken, refreshToken, profile, done) => {
            const exisitingUser = await User.findOne({ googleId: profile.id });

            // Check if User exists in DB
            if (exisitingUser) {
                // console.log("User Exists!");
                return done(null, exisitingUser);
            }
            // If user does not exist
            // console.log("Successfully logged in");
            const user = await new User({ googleId: profile.Id }).save();
            done(null, user);

        }
    )
);