import express from 'express';
import productController from '../controllers/product.controller.js';

const productrouter = express.Router();
const productController = new productController();

productrouter.get('/',productController.getAllProducts);
productrouter.post('/',productController.addProduct);
productrouter.get('/:id',productController.getOneProduct);


export default productrouter;