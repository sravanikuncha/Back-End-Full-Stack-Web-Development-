// Please don't change the pre-written code
// Import the necessary modules here

import { addToCart,removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const userId=req.cookies.userId;
  const productId=req.query.productId;
  const quantity=req.query.quantity;

  console.log("quantity"+" "+quantity)

  const cartItems=addToCart(userId,productId,quantity);
  res.send({"success":true,"item":cartItems});
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId=req.cookies.userId;
  const itemId=req.params.itemId;
  const removedItems=removeFromCart(userId,itemId);


  console.log(removedItems);
  if(removedItems==-1){
    return res.send({"success":false,"msg":'operation not allowed'});
  }
  
  res.send({"success":true,"deletedCartItem":removedItems});
};
