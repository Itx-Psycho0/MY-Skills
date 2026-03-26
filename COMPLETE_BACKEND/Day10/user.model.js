// Data Modeling practice
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

// in mongo db when the data stored the name of the collection is the plural form and in small letters of the model name
// so in this case the collection name will be users