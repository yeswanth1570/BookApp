const mongoose = require('mongoose');

let userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number
    },
    password:{
        type:String
    }
});

let user = mongoose.model('user',userSchema);
module.exports = user;