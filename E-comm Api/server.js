import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

server.use("/api/products", productRouter);

server.get('/', (req, res) => {
  res.send(`Welcome to Ecommerce Apis`);
})

server.listen(8080, () => {
  console.log(`Server is running at 8080 PORT.`);
})