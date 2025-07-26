const Category = require("../models/category")
// add Category
const addCategoryService = require("../services/category/addCategory");
const editCategoryService = require("../services/category/editCategory");
const viewCategoryService = require("../services/category/viewCategory");
const viewCategoriesService = require("../services/category/viewCategories");

const addCategory = async (req, res, next) => {
    try {
        const result = await addCategoryService(req, res, next)
        res.status(201).json({
            success: true,
            message: "Created successfully",
            data: result
        });
    } catch (err) {
        next(err);
    }
}

// edit Category
const editCategory = async (req, res, next) => {
    try {
        const result = await editCategoryService(req, res, next);
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: result
        });
    } catch (err) {
        next(err);
    }
};

// view Category
const viewCategory = async (req, res, next) => {
    try {
        const result = await viewCategoryService(req, res, next);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        next(err);
    }
};

// view Categories
const viewCategories = async (req, res, next) => {
    try {
        const result = await viewCategoriesService(req, res, next);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (err) {
        next(err);
    }
};

// delete Category
// const deleteCategory = async ( req, res, next) => {

// }

module.exports = { addCategory, editCategory, viewCategory, viewCategories }