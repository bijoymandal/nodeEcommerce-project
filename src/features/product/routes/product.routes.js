import express from 'express';
import productController from '../controllers/product.controller.js';

const productRouter = express.Router();
const ProductController = new productController();


productRouter.get('/',ProductController.getAllProducts);
productRouter.post('/',ProductController.addProduct);
productRouter.get('/:id',ProductController.getOneProduct);


export default productRouter;