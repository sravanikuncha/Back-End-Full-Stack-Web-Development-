// Note:  Please do not change the pre-written code

// import the required module here
const mathFileFunctions=require("./math.js");


const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    console.log(`The sum is ${mathFileFunctions.sum(nums)}`);
    console.log(`The mean is ${mathFileFunctions.mean(nums)}`);

};
Solution();
module.exports = Solution;
