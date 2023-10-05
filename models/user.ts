import mongoose from "mongoose";
import validator from "validator";

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validate:{
            validator:validator.isEmail,
            message:"Please provide a valid email"
        }
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
// Create the User model
 const Users = mongoose.model("Users", userSchema);
 export default Users;
