// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts,rateProductModel } from "../model/product.model.js";
import { getAllUsers } from "../../user/model/user.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const userId=req.query.userId;
  const productId=req.query.productId;
  const rating=req.query.rating;

  //usercheck:
  const users=getAllUsers(userId);
  const userIndex=users.findIndex((eachuser)=>{
    return eachuser.id==userId;
  });

  if(userIndex==-1){
    return res.send({"success":false,"msg":'user not found'});
  }

  //product check
  const products=fetchAllProducts();
  const productIndex=products.findIndex((eachProduct)=>{
    return eachProduct.id==productId;
  });
  if(productIndex==-1){
    return res.send({"success":false,"msg":'product not found'});
  }

  //check rating
  if(Number(rating)<0  || Number(rating)>5){
    return res.send({"success": false,  "msg": "rating should be b/w 0 and 5"});
  }

  //success response
  const product=rateProductModel(userId,productId,rating);
  res.send({"success": true,product});
};
