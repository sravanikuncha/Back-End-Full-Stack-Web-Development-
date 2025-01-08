// Please don't change the pre-written code
// Import the necessary modules here
import {blogs,addBlogModel} from "../models/blog.model.js";

export const renderBlogs = (req,res) => {
  // Write your code here
  res.render("blogs",{blogs});
};
export const renderBlogForm = (req,res) => {
  // Write your code here
  res.render("addBlogForm",{});
};
export const addBlog = (req,res) => {
  // console.log(req.body);
  addBlogModel(req.body)
  res.render("blogs",{blogs})
  // Write your code here
};
