// Please don't change the pre-written code
// Import the necessary modules here
import { addUser,confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Write your code here

  const data=req.body;
  addUser(data);
  res.status(201).json({ "status": "success", "user": data});

};

export const loginUser = (req, res) => {
  // Write your code here
  const data=req.body;
  const message=confirmLogin(data);
  if(message){
    res.status(200).json({ "status": "success", "msg": "login successful" });
  }
  else{
    res.status(400).json({ "status": "failure", "msg": "invalid user details" });
  }
};
