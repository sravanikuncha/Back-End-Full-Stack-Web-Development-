import express from "express";

// import path from 'path'
// const modelPath=path.join(path.resolve(),'src','controllers','product.controller.js');


import ProductController from "./src/controllers/product.controller.js";

const productController = new ProductController();
const app = express();

app.get("/", productController.getProducts);

export default app;
