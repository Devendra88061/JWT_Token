import mongoose from "mongoose";
import { postStatus } from "../common/db/enum/enum";

// Define the User schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    fromPoint: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    toPoint: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    vehicleNo:{
        type :String ,
        required :true
    },
    status:{
        type : String,
        enum: postStatus,
        required: true,
        default: "ACTIVE",
    }
    
});
// Create the User model
const Posts = mongoose.model("Post", postSchema);
export default Posts;
