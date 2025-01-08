import express from 'express';
import ProductController from './product.controller.js';
import {upload} from '../../middlewares/fileuplaod.middleware.js';

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', upload.single('imageUrl'), productController.addProduct);
// router.get('/', productController.getOneProduct);
// router.get('/', productController.rateProduct);

export default productRouter;