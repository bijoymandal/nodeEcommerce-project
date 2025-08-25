import express from 'express';
const server = express();
import productrouter from './src/features/product/routes/product.routes';

//Routes
server.use("/api/products",productrouter);

server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce API');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});