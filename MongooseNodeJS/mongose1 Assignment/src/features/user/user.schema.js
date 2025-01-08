// Import the necessary modules here
import mongoose from 'mongoose';

// Start creating your user schema here
export const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        minlength:[3,'The name should be atleast 3 charcaters long']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'email is required'],
        validate:{
            validator:function(value){
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
            },
            message:(value)=>`Path 'email' is invalid (${value.value}).`
        }
    },
    mobile:{
        type:Number,
        required:[true,'mobile  number is required'],
        unique:true
    },
    age:{
        type:Number,
        required:true,
        min:[1,'age must be b/w 0 and 100'],
        max:[99,'age must be b/w 0 and 100']
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:{
            values:[ 'student', 'fresher' , 'experienced'],
            message:(value)=>`${value.value} is not a valid enum value for path 'type'`
        }
    }
})