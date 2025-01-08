const express=require('express')
const server=express();
var expressLayouts = require('express-ejs-layouts');

const path=require('path');
const controllerpath=path.join(path.resolve(),'src','controllers','products.controller.js');

const viewsDir=path.join(path.resolve(),'src','views');

const productsController=require(controllerpath);

const validationPath=path.join(path.resolve(),'src','middleware','formValidation.middleware.js');
const formValidation=require(validationPath);

const productsControllerObj=new productsController();

//set up view engine 
server.set("view engine","ejs");//what is teh view engine name for whatever engine we use specify value 
server.set("views",viewsDir);//just directory where we find engine
 
//use main.js
server.use(express.static("public"));

//layout usage 
server.use(expressLayouts)

//parse the data
server.use(express.urlencoded({extended:true}));

server.get("/",productsControllerObj.getProducts);

server.get("/new",productsControllerObj.getAddForm);

server.post('/submitForm',formValidation.submitFormValidation,productsControllerObj.addNewProduct);

server.get("/update-product/:id",productsControllerObj.updateProduct);

// server.post("/updateForm/:id",formValidation.submitFormValidation,productsControllerObj.updateExistingProduct);
server.post("/updateForm/",productsControllerObj.updateExistingProduct);

server.get("/delete-product/:id",productsControllerObj.deleteProduct);

// server.post("/delete-product/:id",productsControllerObj.deleteProduct);


server.listen(8000,()=>{
    console.log("server started listening to 8000 port")
})


