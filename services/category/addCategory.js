const Category = require("../../models/category")
const Product = require("../../models/product")
const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const addCategory = async ( req, res, next) => {
    const { name, description,} = req.body;
    const userId = req.user._id;
    const data = {
        name,
        description,
        user: userId
    }
    const check = await Category.findOne({name:name, user: userId})
    if(check){
        throw new ErrorResponse(`The category ${data.name} already exist`, 400)
    }

    return await Category.create(data)
}

module.exports = addCategory