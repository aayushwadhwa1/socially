// A group of different actions is known as controller

//home is the name of the funciton
module.exports.home = function(req,res){
    // return res.end('<h1>h1 tag is running on socially</h1>');
    return res.render('home', {
        title: "Home"
    });
}