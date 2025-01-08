//ipconfig --private address
//chrome- what is my ip -public address
//npm install
// check documentation of node js  https://nodejs.org/docs/latest-v20.x/api/fs.html
//check all packages present in npm https://www.npmjs.com/package/npmm
//my private ip address 
// http://192.168.1.11:8080/ == localhost
//npm i packagename //locally only for that applpication 
//npm i -g packagename system level not for only package  path to check C:\Users\User\AppData\Roaming\npm

//powershell to be run as administrator , 
// because i am facing issues follow this step 
//  Change the Execution Policy:
//     - Open PowerShell as Administrator (as mentioned above).
//     - Run the following command to change the execution policy: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//     - Then, run your script again: nodemon server.mjs


const path=require('path')
//before nodemon
console.log("Hello World ");

//after nodemon installe dglobally 
console.log("Hello World after nodemon4")

const actualPath=path.join(path.resolve(),'public','public1');

console.log(actualPath);
