// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from './src/controllers/user.controller.js';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

//create routes here

const userControllerObj=new UserController();

app.get("/register",userControllerObj.getRegister);

app.post("/register",userControllerObj.addUser);

app.get("/login",userControllerObj.getLogin);

app.post("/login",userControllerObj.loginUser);



export default app;
