require('dotenv').config();
const { NODEMAILER_HOST, NODEMAILER_USER, USER_EMAIL, NODEMAILER_PASS, NODEMAILER_PORT} = process.env;
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: NODEMAILER_HOST,
    port: NODEMAILER_PORT,
    secure: true,
    auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
    },
});

let options = {
    from: NODEMAILER_USER,
    to: USER_EMAIL,
    subject: "Hello Family",
    text: "This is my Thanksgiving email !"
};

transporter.sendMail(options,(error, info) => {
    if(error) console.log(error)
    console.log('Email sent successfully : ' + info.response);
});




