const generateOTP = function(length = 6) {
    let otp = ''
    const digits = "0123456789"
    for (let index = 0; index < length; index++) {
        const element = digits[Math.floor(Math.random() * digits.length)];
        otp += element
    }
    return otp
}

module.exports = generateOTP