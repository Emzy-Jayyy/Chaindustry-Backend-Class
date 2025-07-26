const addShop = require("../services/shop/addShop");


module.exports.addShop = async (req, res, next) => {
    const result = await addShop(req, res, next)
    res.status(201).json({
        success: true,
        message: "Created successfully",
        data: result
    });
}