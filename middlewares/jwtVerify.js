const User = require("../models/user")
const ErrorResponse = require("../utils/ErrorResponse")
const jwt = require("jsonwebtoken")

const jwtVerify = async (req, res, next) => {
    let token
    
    if(!req.headers.authorization){
        throw new ErrorResponse("Bad Request", 400)
    }

    // Handle both "Bearer <token>" and direct token formats
    const authHeader = req.headers.authorization;
    if(authHeader.startsWith('Bearer ')) {
        token = authHeader.split(" ")[1];
    } else {
        token = authHeader; // Direct token format
    }
    
    if(!token){
        throw new ErrorResponse("Bad Authorization header", 400)
    }

    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password')
        if(!user){
            throw new ErrorResponse("User not found", 400)
        }
        user.lastLogin = Date.now()
        await user.save()
    
        req.user = user
        next()
    }catch (err){
        throw new ErrorResponse(err.message, 400)
    }
}

module.exports = jwtVerify