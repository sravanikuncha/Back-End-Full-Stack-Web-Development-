// Please don't change the pre-written code

const express = require("express");
const server = express();
const path=require('path');


const actualPath=path.join(path.resolve(),'public','public1');

console.log(actualPath);


const renderStatic = () => {
  // Write your code here
  server.use(express.static('public'));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic();

module.exports = { renderStatic, server };
