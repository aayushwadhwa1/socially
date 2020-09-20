const passport = require('passport');
const User = require('../models/user');
const { use } = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email, password, done){
        //find the user and establsh identity
        User.findOne({email:email}, function(err, user){
            if(err)
            {
                console.log('Error in finding user ---> Passport');
                return done(err);
            }

            if(!user || user.password!=password)
            {
                console.log('Invalid Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

//Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null,user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err)
        {
            console.log('Error in finding user ---> Passport');
            return done(err);
        }
        return done(null, user);
    })
});

module.exports = passport;