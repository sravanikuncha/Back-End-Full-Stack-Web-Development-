// Please do not change the prewritten code
// https://rapidapi.com/guides/axios-async-await
// import axios from 'axios';

const axios=require('axios');


const url="https://api.codingninjas.com/api/v3/event_tags";
const Solution = async () => {
  // Write your code here
  const urlResult=await axios.get(url);
  console.log(urlResult.data);

};

Solution();

module.exports = Solution;

// export {Solution};
