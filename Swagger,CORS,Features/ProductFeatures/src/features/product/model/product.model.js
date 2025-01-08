// Please don't change the pre-written code
// Import the necessary modules here

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  const productData=products.find((eachProduct)=>{
    return eachProduct.id==productId;
  });

  const ratingValue =productData.rating;

  //rating are availbel for product 
  if(ratingValue){

    
    //check for that user rating is there
    const userData=ratingValue.find((eachRating)=>{
      return eachRating.userId==userId;
    });

    //user present
    if(userData){
      userData.rating=rating;
    }

    //if user not present add userid and ratig object
    else{
      ratingValue.push({"userId":userId,"rating":ratingValue});
    }

    
  }
  else{
    productData.rating=[];
    const ratingObj={
      "userId":userId,
      "rating":rating
    }
    productData.rating.push(ratingObj);
  }

  return productData;
}
