const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dorramziou@gmail.com',
        pass: 'Dorra@2024'
    }
});

// Define email content
let mailOptions = {
    from: 'dorramziou@gmail.com',
    to: 'sebacom.tunisie@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js .'
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log('Error occurred:', err);
    } else {
        console.log('Email sent:', info.response);
    }
});
