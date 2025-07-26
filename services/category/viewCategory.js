const Category = require('../../models/category')
const ErrorResponse = require('../../utils/ErrorResponse')

const viewCategory = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user._id;
    
    const category = await Category.findOne({ _id: id, user: userId })
        .populate('user', 'email')
        .populate('shop', 'name location brand');
    
    if (!category) {
        throw new ErrorResponse("Category not found or does not belong to you", 404);
    }
    
    return category;
}

module.exports = viewCategory; 