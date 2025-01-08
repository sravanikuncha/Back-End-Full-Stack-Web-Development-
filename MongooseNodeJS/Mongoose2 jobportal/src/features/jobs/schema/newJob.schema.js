// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from 'mongoose';

export const jobSchema = new mongoose.Schema({
  // Write your code here

  title:{
    required:true,
    type:String
  },
  description :{
    required:true,
    type:String
  },
  company :{
    required:true,
    type:String
  },
  salary :{
    required:true,
    type:Number
  },
  applicants :[{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User',
   required:true
  }]
});
