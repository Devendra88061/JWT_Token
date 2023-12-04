import mongoose, { Schema } from "mongoose";


// Define the User schema
const tokenSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Users",
      },
      token: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,// this is the expiry time in seconds
      },
    
});
// Create the User model
const Token = mongoose.model("Token", tokenSchema);
export default Token;
