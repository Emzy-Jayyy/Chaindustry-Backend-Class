const Category = require('../../models/category')
const ErrorResponse = require('../../utils/ErrorResponse')

const viewCategories = async (req, res, next) => {
    const { shopId, page = 1, limit = 10 } = req.query;
    const userId = req.user._id;
    const filter = { user: userId };
    
    if (shopId) filter.shop = shopId;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const categories = await Category.find(filter)
        .populate('user', 'email')
        .populate('shop', 'name location brand')
        .skip(skip)
        .limit(parseInt(limit));
    
    if (!categories || categories.length === 0) {
        throw new ErrorResponse("No categories found!", 404);
    }
    
    return categories;
}

module.exports = viewCategories; 

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJpZCI6IjY4NmU5NTIwY2JjN2I3NjFhMzQ5MDNiZSIsImlhdCI6MTc1MjMzNTUxNiwiZXhwIjoxNzUyMzM5MTE2fQ.
// dN0RXAZtKaC4Q85R0Vn5Z9Q9BDGgcU8Nj_AcWiwI1fc