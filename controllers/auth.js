const register = require("../services/auth/register");
const login = require("../services/auth/login");


module.exports.login = async (req, res, next) => {
    const result = await login(req)
    res.status(200).json({
        success: true,
        message: "These is no data for now",
        data: result
    })
}

module.exports.register = async (req, res, next) => {
    const result = await register(req);
    res.status(200).json({
        success: true,
        message: "Registration is successful",
        data: result
    })
}