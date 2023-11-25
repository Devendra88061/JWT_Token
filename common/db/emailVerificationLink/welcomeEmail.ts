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
      subject: 'Welcome Email',
      html: '<p>Hello Dear:</p><img src="cid:./common/db/assets/logo.png"/>',
    attachments: [
      {
        filename: 'logo.png', // name of the attached image
        path: './common/db/assets/logo.png', // path to the image file
        cid: 'unique-image-id' // same as in the html img src
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