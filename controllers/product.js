// const Product = require("../models/product")
// const ErrorResponse = require("../utils/ErrorResponse")
const addProduct = require('../services/product/addProduct')
const deleteProduct = require('../services/product/deleteProduct')
const editProduct = require('../services/product/editProduct')
const viewProduct = require('../services/product/viewProduct')
const viewProducts = require('../services/product/viewProducts')

// add product
module.exports.addProduct = async (req, res, next) => {
    const result = await addProduct(req, res, next)
    res.status(201).json({
        success: true,
        message: "Created successfully",
        data: result,
    });
}

// view product
module.exports.viewProduct = async (req, res, next) => {
    const result = await viewProduct(req, res, next)
    res.status(201).json({
        success: true,
        message: "Product found",
        data: result,
    });
}

// view products
module.exports.viewProducts = async (req, res, next) => {
    const result = await viewProducts(req, res, next)
    res.status(200).json({
        success: true,
        message: "Products found",
        data: result,
    });
}

// edit products
module.exports.editProduct = async (req, res, next) => {
    const result = await editProduct(req, res, next)
    res.status(201).json({
        success: true,
        message: "Product Updated Successfully",
        data: result,
    });
}

//delete product
module.exports.deleteProduct = async (req, res, next) => {
    const result = await deleteProduct(req, res, next);
    res.status(201).json({
        success: true,
        message: 'Product successfully deleted',
        data: result,
    });
}



// const viewProduct = async (req, res, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     return res.status(404).json({ message: "No product found" });
//   }

//   res.status(200).json({ success: true, product });
// };

// // view products
// const viewProducts = async (req, res, next) => {
//   const product = await Product.find();

//   if (!product) {
//     return res.status(404).json({ message: "No product found" });
//   }

//   res.status(200).json({ success: true, product });
// };

// // delete product
// const deleteProduct = async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   await Product.findByIdAndDelete(req.params.id);

//   res.status(201).json({ success: true, message: "Deleted Successfully" });
// };

// module.exports = { addProduct, editProduct, viewProduct, viewProducts, deleteProduct }