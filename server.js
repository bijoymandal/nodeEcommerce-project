import express from 'express';
const server = express();
import productRouter from './src/features/product/routes/product.routes.js';

//Routes
server.use("/api/products",productRouter);

server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce API');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});