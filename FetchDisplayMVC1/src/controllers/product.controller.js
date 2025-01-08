// Import the necessary modules here
// import path from 'path'
// const modelPath=path.join(path.resolve(),'src','models','product.model.js');


import ProductModel from '../models/product.model.js';

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    res.send(new ProductModel().fetchProducts());
  };
}
