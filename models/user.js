const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,

    }
}, {
    timestamps: true   //this will keep a record of when the user was created, deleted, modified etc
});

const user = mongoose.model('user', userSchema);

module.exports = user;