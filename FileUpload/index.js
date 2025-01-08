import  express from 'express'
const server=express();

import path from 'path';
const viewsDir=path.join(path.resolve(),'src','views');


import  expressLayouts from 'express-ejs-layouts';

import  {getAddForm,saveFile}  from './src/controllers/fileupload.controller.js';

import {upload} from './src/middleware/fileupload.middleware.js';

import fileUpload from 'express-fileupload';

server.use(expressLayouts);

server.use(express.static('public'))

server.use(express.urlencoded({extended:true}));

//set up view engine 
server.set("view engine","ejs");//what is teh view engine name for whatever engine we use specify value 
server.set("views",viewsDir);//just directory where we find engine

server.get("/",getAddForm);

// server.post('/fileSave',upload.single('myFile'),saveFile);

//using express fileupload
server.use(fileUpload());
server.post('/fileSave',saveFile);

server.listen(8000,()=>{
    console.log("server started listening to 8000 port")
})