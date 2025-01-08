import ProductModel from "./product.model.js"

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, desc, price, sizes } = req.body;
    const newProduct = {
      name,
      desc,
      price: parseFloat(price),
      imageUrl: req.file.filename,
      sizes: sizes.split(','),
    }
    const createdRecord = ProductModel.add(newProduct);
    res.status(201).send(createdRecord);
  }
  rateProduct(req, res) {

  }
  getOneProduct(req, res) {

  }
}