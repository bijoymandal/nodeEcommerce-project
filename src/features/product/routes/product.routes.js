import express from 'express';
import productController from '../controllers/product.controller.js';

const productrouter = express.Router();
const ProductController = new productController();

productrouter.get('/',ProductController.getAllProducts);
productrouter.post('/',ProductController.addProduct);
productrouter.get('/:id',ProductController.getOneProduct);


export default productrouter;