const Product = require('../../models/product')
const ErrorResponse = require('../../utils/ErrorResponse');

const viewProducts = async (req, res, next) => {
    const { userId, shopId, categoryId, page = 1, limit = 10 } = req.query;
    const filter = {};
    if (userId) filter.user = userId;
    if (shopId) filter.shop = shopId;
    if (categoryId) filter.category = categoryId;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const products = await Product.find(filter)
        .populate('user', 'email')
        .populate('shop', 'name location brand')
        .populate('category', 'name description')
        .skip(skip)
        .limit(parseInt(limit));
    if (!products || products.length === 0) {
        throw new ErrorResponse("No products found!", 404);
    }
    return products;
}

module.exports = viewProducts;