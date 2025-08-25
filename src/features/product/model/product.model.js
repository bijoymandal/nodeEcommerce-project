export default class productModel {
    constructor(id, name, desc,imageUrl,category, price,sizes) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes; // Array of available sizes
    }

    static getAll() {
        return this.products;
    }

    addProduct(product) {
        this.products.push(product);
        return product;
    }

    getOneProduct(id) {
        return this.products.find(product => product.id === id);
    }

    rateProduct(id, rating) {
        const product = this.getOneProduct(id);
        if (product) {
            product.ratings = product.ratings || [];
            product.ratings.push(rating);
            return product;
        }
        return null;
    }
}

let products = [
    new productModel(1, "T-Shirt", "Comfortable cotton t-shirt", "https://example.com/tshirt.jpg", "Clothing", 19.99, ["S", "M", "L", "XL"]),
    new productModel(2, "Jeans", "Stylish blue jeans", "https://example.com/jeans.jpg", "Clothing", 49.99, ["30", "32", "34", "36"]),
    new productModel(3, "Sneakers", "Running sneakers", "https://example.com/sneakers.jpg", "Footwear", 89.99, ["8", "9", "10", "11"]),
    new productModel(4, "Jacket", "Warm winter jacket", "https://example.com/jacket.jpg", "Clothing", 99.99, ["M", "L", "XL"]),
    new productModel(5, "Backpack", "Durable backpack for everyday use", "https://example.com/backpack.jpg", "Accessories", 39.99, []),
];