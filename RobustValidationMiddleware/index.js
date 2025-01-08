import express from "express";
import { newUser } from "./user.controller.js";
import { formValidationMiddleware } from "./middleware.js";
// Please don't change the pre-written code
// Import the necessary modules here

const app = express();
app.use(express.json());

app.post("/new", formValidationMiddleware);//formvalidation middleware
app.post("/new", newUser);

export default app;
