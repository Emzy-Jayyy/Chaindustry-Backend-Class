const User = require("../../models/user")
// const sendMailData = require("../../utils/mail")
const generateOTP = require("../../utils/otp")

const register = async (req) => {
    const { username, email, password, referredBy = null } = req.body
    const data = {
        username, email, password, referredBy
    }
    const result = await User.create(data)
    const token = generateOTP()

    // const options = {
    //     email,
    //     subject: "Verification Token",
    //     body: "Welcome to the website",
    //     message: `<div style='color: red; text-align: center; box-sizing: border-box; font-size:14px;'>Hello, welcome to our platform.\n Your verification token is: ${token}</div>`
    // }
    // // send a mail
    // await sendMailData(options)

    result.verification = token
    await result.save()
    
    return result
}

module.exports = register