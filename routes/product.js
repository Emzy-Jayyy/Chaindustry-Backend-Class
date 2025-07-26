const express = require('express')

const { addProduct, viewProduct, viewProducts, deleteProduct, editProduct } = require('../controllers/product');
const validateData = require('../middlewares/products/addProductValidation');
const jwtVerify = require('../middlewares/jwtVerify');

const route = express.Router()

route.post('/add', jwtVerify, validateData, addProduct);
route.put('/edit', jwtVerify, editProduct);
route.get('/view-one/:id', jwtVerify, viewProduct);
route.get('/view', jwtVerify, viewProducts);
route.delete('/delete', jwtVerify, deleteProduct);

module.exports = route