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

// send welcome email 
const sendWelcomeEmail = (email:any) => {
    const mailOptions = {
      from: FROM_MAIL,
      to: email,
      subject: 'Welcome to transport management',
      html: '<p>Hello Dear: Welcome aboard! Were excited to have you as a valued user of Transport Management.Your journey to streamlined transport management begins now.</p><img src="cid:./common/db/assets/logo.png"/>',
    attachments: [
      {
        filename: 'logo.png',
        path: './common/db/assets/logo.png',
        cid: 'unique-image-id'
      }
    ]
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error in send Email:", error);
      } else {
        console.log("Email sent");
      }
    });
  };
  export default sendWelcomeEmail