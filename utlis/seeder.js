const connectDB = require("../db");
const Products = require("../models/pizzaModel");

const products = require("../products");

connectDB();

const seederProducts = async () => {
  try {
    await Products.deleteMany();
    console.log("Product deleted");

    await Products.insertMany(products);
    console.log(" All Product inserted");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seederProducts();
