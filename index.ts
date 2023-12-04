import express from "express";
import bcrypt from "bcryptjs";
import { MONGO_URL, PORT } from "./config/config";
import mongoose from "mongoose";
import router from "./modules";
import cors from "cors";

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

app.use("/api", router);


