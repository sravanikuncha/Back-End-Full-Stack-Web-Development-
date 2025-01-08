// Please don't change the pre-written code
// Import the necessary modules here

import {userModel} from '../models/users.model.js';

export const userController = async (req, res) => {
  // Write your code here
  //async returns a promise 
  userModel().then((result)=>{
    // console.log(result.users);
    res.render("index",{users:result.users});
 
  })
  
};
