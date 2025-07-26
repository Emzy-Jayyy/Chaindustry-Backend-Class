const User = require("../../models/user")
const ErrorResponse = require("../../utils/ErrorResponse")

const login = async (req) => {
    const { email, password } = req.body
    
    const user = await User.findOne({email}).select('password')
    if(!user){
        throw new ErrorResponse('User with such email does not exist', 400)
    }

    const checkPassword = await user.verifyPassword(password);
    if(!checkPassword){
        throw new ErrorResponse(`Password mismatch`, 400)
    }
    
    return await user.getJWTToken()
}

module.exports = login