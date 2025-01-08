import express from "express";
import { renderBlogForm, validateBlog } from "./blog.controller.js";
import path from "path";
const app = express();

app.set("view engine", "ejs");//ejs formats dynamic content
app.set("views", path.resolve("views"));//rendering views 
app.use(express.urlencoded({ extended: true }));//this is why we are getting req.body

app.get("/", renderBlogForm);
app.post("/addblog", validateBlog);

export default app;
