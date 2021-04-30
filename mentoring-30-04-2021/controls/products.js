const ProductModel = require("../model/product");

exports.productTest = (req, res) => {
  res.send("products!");
};

exports.products = (req, res) => {
  res.send(ProductModel);
};
