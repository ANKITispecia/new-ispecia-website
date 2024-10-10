'use server';
const nodemailer = require('nodemailer');
const validateEmail = require('@devmehq/email-validator-js'); // Import the email validator

// Define the transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use another service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
  },
});

// Server action to handle form submission
export const handleFormSubmission = async (formData) => {
  const { name, email, subject, message } = formData;

  try {
    // Validate email using the @devmehq/email-validator-js library
    const validation = await validateEmail(email);

    // Check if the email is valid
    if (!validation.isValid) {
      throw new Error('Invalid email address');
    }

    // Check if the email is disposable
    if (validation.isDisposable) {
      throw new Error('Disposable email addresses are not allowed');
    }

    // Add additional checks based on the validation response
    if (validation.mxCheck && !validation.mxCheck.success) {
      console.warn('MX record check failed; SMTP verification may not always succeed with some domains (like Yahoo).');
    }

    // Construct email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: 'recipient@example.com', // Replace with your target email
      subject: subject || 'New Contact Form Submission', // Fallback subject if not provided
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email using nodemailer
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return { success: true, message: 'Email sent successfully' };
    
  } catch (error) {
    console.error('Error during form submission: ', error);
    return { success: false, message: error.message };
  }
};
