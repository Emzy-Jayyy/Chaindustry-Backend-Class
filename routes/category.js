const express = require('express')

const { addCategory, editCategory, viewCategory, viewCategories } = require('../controllers/category');
const jwtVerify = require('../middlewares/jwtVerify');
const validateCategoryData = require('../middlewares/categories/addCategoryValidation');

const route = express.Router()

route.post('/add', validateCategoryData, jwtVerify,  addCategory);
route.put('/edit/:id', jwtVerify,  editCategory);
route.get('/', jwtVerify,  viewCategories);
route.get('/:id', jwtVerify,  viewCategory);

module.exports = route;