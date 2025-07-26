const Category = require('../../models/category')
const ErrorResponse = require('../../utils/ErrorResponse')

const editCategory = async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const userId = req.user._id;
    
    const category = await Category.findOne({ _id: id, user: userId });
    if (!category) {
        throw new ErrorResponse("Category not found or does not belong to you", 404);
    }
    
    // Update category fields
    if (name) category.name = name;
    if (description) category.description = description;
    
    await category.save();
    return category;
}

module.exports = editCategory; 