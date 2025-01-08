// Import the necessary modules here.
const pathModule =require('path')
exports.getAbsolutePath = (filePath) => {
// Write your code here

return (pathModule.resolve(filePath));
};
