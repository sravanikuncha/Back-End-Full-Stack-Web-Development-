// Import the necessary modules here
// import path from 'path'
// const assestsPath=path.join(path.resolve(),'src','assets','products.js');


import {products} from '../assets/products.js';

export default class ProductModel {
  fetchProducts = () => {
    // Write your code here
    // console.log(products);
    return products;
  };
}
