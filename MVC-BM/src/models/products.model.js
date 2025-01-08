

class ProductsModel {

  //variables 
  id;
  name;
  description;
  price;
  image;

  constructor(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  static getProductFromDB(id) {
    return products.find((eachProduct) => eachProduct.id == id);
  }

  static updateExistingProductModel(productData) {
    return products.find((eachProduct)=>{
      if(eachProduct.id==productData.id){
        eachProduct.name=productData.name;
        eachProduct.description=productData.description;
        eachProduct.price=productData.price;
        eachProduct.image=productData.image;
      }
    })
    // const index = products.findIndex((eachProduct) => eachProduct.id == productData.id);
    // products[index] = productData;
  }

  static deleteProductModel(id) {
    const deleteIndex = products.findIndex((eachProduct) => eachProduct.id == id);
    console.log(deleteIndex);
    products.splice(deleteIndex, 1);
  }


}

function addNewProducttoDB(name, description, price, imageUrl) {

  const newProduct = new ProductsModel(products.length + 1, name, description, Number(price), imageUrl);

  products.push(newProduct);
}



var products = [
  new ProductsModel(
    1,
    'Product 1',
    'Description for Product 1',
    19.99,
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  ),
  new ProductsModel(
    2,
    'Product 2',
    'Description for Product 2',
    29.99,
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
  ),
  new ProductsModel(
    3,
    'Product 3',
    'Description for Product 3',
    39.99,
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
  ),
]





module.exports = { products, addNewProducttoDB, ProductsModel };