const mongoose = require('mongoose');
const {Schema} = mongoose;

//UserSchema for storing user data
const UserSchema = new Schema(
    {
        name:{
            type : String,
            required : true
        },
        email:{
            type : String,
            required : true
        },
        password:{
            type : String,
            required : true
        },
        timestamp:{
             type : Date,
             default : Date.now
        }
        
    });

const User = mongoose.model('User',UserSchema);
module.exports = User;