require('dotenv').config();

module.exports = {
  dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uubfwez.mongodb.net/melosynthia`,

  smtp: {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASSWORD,
    },
  },

  port: 5000,
  jwt_secret: process.env.JWT_SECRET_TOKEN,
};
