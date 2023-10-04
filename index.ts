import express from "express";
import bcrypt from "bcryptjs";
require('dotenv').config();
 
export const app = express();
// parsing the request data
app.use(express.json());
const port = process.env.PORT || 3000;
// console.log("port--", port, typeof port);
 
app.listen(port, () => {
  console.log("Server is running on port",port);
});

// routers

//simple get api for user
const users : any = [];

app.get("/api/users", (request, response) => {
    response.status(200).json({
        success : true,
        message : "user data received successfully!",
        data : users,
    });
});


//Simple post api for user
app.post("/api/register", async (request, response) => {
    const user = request.body;
    
    if (!user.email || !user.password) {
      response.status(400).json({
       success : false,
       message : "Username and password are required.",
       data : null
      })
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    users.push(user);
    response.status(200).json({
       success : true,
       message : "user created successfully",
       data : user,
    });
  });

