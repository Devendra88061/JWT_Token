import mongoose from "mongoose";


// Define the User schema
const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: false,
    },
    fromCity: {
        type: String,
        required: true,
    },
    toCity: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    vehicalNo :{
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isBooked:{
        type: Boolean,
        default: false
    },
    userId:{
        type: String,
        required: true,
    }
    
});
// Create the User model
const Posts = mongoose.model("Posts", postSchema);
export default Posts;
