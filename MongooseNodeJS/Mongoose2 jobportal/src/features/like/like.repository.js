// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";

const likeModel=mongoose.model('Like',likeSchema);

export const likeRepo = async (user_id, job_id, model) => {
  // Write your code here
  const likeDB=new likeModel({user:user_id,likeable:job_id,on_model:model});
  await likeDB.save();
  return likeDB;
};
export const getLikesRepo = async (id, on_model) => {
  // Write your code here
  //here id is jobid , find 
  const likeDB=await likeModel.find({likeable:id}).populate('user').populate('likeable');
  console.log(likeDB)
  return likeDB;
};
