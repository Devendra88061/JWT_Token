import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "devendra.patil@virtoustack.com",
      pass: "Devendr@0077",
    }
  });


const sendVerificationEmail = (email:any, token: any) => {
    const verificationLink = `http://transportManagement.com/verify?token=${token}`;
  
    const mailOptions = {
      from: "devendra.patil@virtoustack.com",
      to: email,
      subject: 'Email Verification',
      html: `Click <a href="${verificationLink}">here</a> to verify your email.`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error in send Email:", error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };
  
  export default  sendVerificationEmail;