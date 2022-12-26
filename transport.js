const nodemailer =  require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'dineshkumar.webhopers@gmail.com',
    pass: '9F8pDx7IhEGyrJaR',
  },
  logger: true,
});

module.exports = transporter;
