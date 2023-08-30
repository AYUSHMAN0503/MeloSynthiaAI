const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const { smtp } = require('../config');

function generateOTP(digit = 6) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < digit; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits[randomIndex];
  }
  return otp;
}

async function sendOtp(username, email, otp) {

  let transporter = nodemailer.createTransport({
    ...smtp,
    secure: false,
    requireTLS: true,
  });

  const renderedHtml = await ejs.renderFile(path.join(__dirname, '../Templates/otp-template.ejs'), { username, otp });

  const message = {
    from: smtp.auth.user,
    to: email,
    subject: 'Melosynthia AI - Reset your password',
    html: renderedHtml
  };

  transporter.sendMail(message, function (error, info) {
    if (error) console.log("error is occuring: ", error);
    else {
      console.log("The mail has been sent: ", info.response);
    }
  })
}




module.exports = {
  generateOTP,
  sendOtp
}