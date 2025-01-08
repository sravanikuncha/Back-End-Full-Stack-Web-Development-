// Please don't change the pre-written code
// Import the necessary modules here

import axios from 'axios';

const url='https://dummyjson.com/users';

export const userModel = async () => {
  // Write your code here
  
  const usersList=await axios.get(url);
  return usersList.data;
  
};
