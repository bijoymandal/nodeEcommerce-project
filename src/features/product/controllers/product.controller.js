import productModel from "../model/product.model.js";

export default class productController {
    getAllProducts(req, res) {
        const products = productModel.getAll();
        res.status(201).json({"message":"All Products fetched successfully","products":products,"status":"success"});
    }
    addProduct(req, res) {}
    rateProduct(req, res) {}
    getOneProduct(req, res) {}
}