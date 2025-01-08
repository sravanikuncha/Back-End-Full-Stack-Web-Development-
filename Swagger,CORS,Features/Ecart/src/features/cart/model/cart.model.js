// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  cartItems.push(new cartModel(userId,productId,quantity));
  return cartItems;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here

  
  const cartDataIndex=cartItems.findIndex((eachcartItem)=>{
    return eachcartItem.userId==userId && eachcartItem.id==cartItemId;
  });

  if(cartDataIndex==-1){
    return cartDataIndex;
  }
  const res=cartItems[cartDataIndex];;
  cartItems.splice(cartDataIndex,1);
  return res;
};
