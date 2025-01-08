// Import required module
const readline = require('readline');

// const Math=require('math');

const readLine=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const Solution = () => {
  // Write your code here

  function firstnr(fnuInput){
    function secondnr(snuInput){
      // console.log(typeof snuInput) string 
      console.log(`The maximum of the  two numbers is: ${Math.max(fnuInput,snuInput)}`);
      readLine.close();
    }
    readLine.question('Enter the second number ',secondnr);
  }
  readLine.question('Enter the first number ',firstnr);

  //callback function is invoke donly when user gives input a nd then function is called with that input 


};

Solution();

module.exports = Solution;
