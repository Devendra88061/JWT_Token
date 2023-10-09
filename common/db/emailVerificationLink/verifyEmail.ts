import nodemailer from "nodemailer";
import { APP_PASSWORD, FROM_MAIL } from "../../../config/config";

// transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: FROM_MAIL,
      pass: APP_PASSWORD,
    }
  });


// function for send mail using nodemailer
const sendVerificationEmail = (email:any, token: any) => {
    const verificationLink = `http://TransportManagement_verify?token=${token}`;
  
    const mailOptions = {
      from: FROM_MAIL,
      to: email,
      subject: 'Email Verification',
      html: `Click <a href="${verificationLink}">here</a> to verify your email.`
    };
  
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error in send Email:", error);
      } else {
        console.log("Email sent");
      }
    });
  };
  
  export default  sendVerificationEmail;