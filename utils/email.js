const nodemailer = require('nodemailer');

const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    //service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    // Activate in gmail "less secure app" option
  });
  const mailOptions = {
    from: 'David Nodine <davidnodine@david.io>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
