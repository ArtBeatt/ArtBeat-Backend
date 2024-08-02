const express = require('express');
const router = express.Router();
const User = require('../models/user_model.sql');//I am not sure
const crypto = require('crypto');
const nodemailer = require('nodemailer');

  
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    const token = crypto.randomBytes(10).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();



    const transporter = nodemailer.createTransport({     // Send email with reset link
      // Configure your email sending service here


    });

    const mailOptions = {
      from: 'Artbeat@gmail.com',//I am not sure
      to: email,
      subject: 'Password Reset Request',
      text: `You are receiving this email because you (or someone else) has requested to reset the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset-password/${token}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = forg;