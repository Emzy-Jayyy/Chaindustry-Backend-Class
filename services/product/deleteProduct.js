const Product = require('../../models/product');
const ErrorResponse = require('../../utils/ErrorResponse');

const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new ErrorResponse('No product to delete!')
    }

    return product;
}

module.exports = deleteProduct;