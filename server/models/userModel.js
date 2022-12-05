// usermodel
//conatin name, email, password, picture

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true,
            unique:true
        },
        password:{
            type:String,
            required: true
        }, 
        pic:{
            type:String,
            default: "https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0="
        },
    },
    {
        timestamps:true,
    }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;