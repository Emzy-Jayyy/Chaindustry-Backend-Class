const Product = require('../../models/product')
const Category = require('../../models/category')
const Shop = require('../../models/shop')
const ErrorResponse = require('../../utils/ErrorResponse')

const editProduct = async (req, res, next) => {
    const { name, description, quantity, price, images, userId, categoryId, shopId } = req.body;
    // confirm the availability of categoryId
    const checkCategory = await Category.findOne({ _id: categoryId, user: userId }).select('_id')
    if (!checkCategory) {
        throw new ErrorResponse("Category does not exist or does not belong to you", 400)
    }
    // confirm the availability of shopId
    const checkShop = await Shop.findOne({ _id: shopId, user: userId }).select('_id')
    if (!checkShop) {
        throw new ErrorResponse("Shop does not exist or does not belong to you", 400)
    }
    const product = await Product.findOne({ name: name, user: userId })
    if (!product) {
        throw new ErrorResponse(`The product ${name} does not exist`, 400)
    }
    // Update product fields
    product.description = description || product.description;
    product.quantity = quantity || product.quantity;
    product.price = price || product.price;
    product.slug = images || product.slug;
    product.category = categoryId || product.category;
    product.shop = shopId || product.shop;
    await product.save();
    return product;
}

module.exports = editProduct;