const nodemailer = require('nodemailer')

const sendMail = async (options) => {
    const credentials = nodemailer.createTransport({
        host: process.env.MAILHOST,
        secure: process.env.MAILSECURE,
        // service: process.env.MAILSERVICE,
        port: process.env.MAILPORT,
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSWORD,
        }
    });
    const send = await credentials.sendMail(options)
    console.log(send)
}

module.exports = sendMail