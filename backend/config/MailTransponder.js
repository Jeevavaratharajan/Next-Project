const nodemailer = require('nodemailer')
const dotenv = require('dotenv') ;
dotenv.config();

const MailTransponder = nodemailer.createTransport({
    
    service : "gmail",
    auth:{
        user: process.env.MAIL_ID,
        pass: process.env.PASSWORD_ID
    },
})
 module.exports = MailTransponder;