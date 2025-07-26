const express = require('express')


const { addShop } = require('../controllers/shop');
const validateShopData = require('../middlewares/shops/addShopValidation');
const jwtVerify = require('../middlewares/jwtVerify');

const route = express.Router()

route.post('/add', validateShopData,jwtVerify, addShop);

module.exports = route