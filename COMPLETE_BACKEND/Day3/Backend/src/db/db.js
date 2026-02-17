const mongoose = require('mongoose');
async function connectDB() {
    await mongoose.connect("mongodb+srv://psycho:AAnu35&$935@cluster0.krnueuo.mongodb.net/project2")
    console.log("Connected to MongoDB");
}
module.exports = connectDB;