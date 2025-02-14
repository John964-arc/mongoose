var mongoose = require('mongoose');
var validator = require('validator')

let firstSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
        

    },
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    email:{
        type:String,
        required:true,
        validator:{
            validator:(value)=>validator.isEmail(value),
            message:'Invalid email address'
        }
    }
});
module.exports = mongoose.model('firstModel', firstSchema); // Model name is 'firstModel'