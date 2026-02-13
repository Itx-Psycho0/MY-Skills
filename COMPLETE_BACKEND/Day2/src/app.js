

const express = require("express");
const app = express();


const dotenv = require("dotenv");
const rateLimiter = require("./middleware/rateLimiter");
dotenv.config();


app.use(express.json());
app.use(rateLimiter)

app.use("/notes", require("./routes/notesRoutes"));





module.exports = app;