module.exports.profile = function(req,res)
{
    return res.render('user_profile', {
        title: "user profile"
    });
}

//render the sign up page
module.exports.signUp = function(req,res)
{
    return res.render('user_sign_up',{
        title: "Socially | Sign Up"
    });
}

//render the sign in page
module.exports.signIn = function(req,res)
{
    return res.render('user_sign_in',{
        title: "Socially | Sign In"
    });
}

//get the sign up data
module.exports.create = function(req, res)
{
    //TODO later
}

//sign in and create the session
module.exports.createSession = function(req, res)
{
    //TODO later
}