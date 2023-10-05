import express from "express";
import bcrypt from "bcryptjs";
import { MONGO_URL, PORT } from "./config/config";
import mongoose from "mongoose";
import router from "./modules";
import cors from "cors"


export const app = express();

// parsing the request data
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// dataBase connection
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL).then(()=>{
  console.log("\n*************MONGODB connected**************\n");
}).catch(error =>{
  console.log("unable to connect with database:", error);
});
 
// App testing
app.get('/ping', (req,res)=>{
  res.status(200).json({
      status: true,
      message : "App is working",
  })
});

// router 
app.use("/api", router)

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

