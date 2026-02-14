

const express = require("express");
const path = require("path");


const cors = require("cors");
const dotenv = require("dotenv");
const rateLimiter = require("./middleware/rateLimiter");
dotenv.config();
const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:5173",
    "http://localhost:5174",
].filter(Boolean);


if (process.env.NODE_ENV !== "production") {
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
}

app.use(express.json());
app.use(rateLimiter)

// Align API prefix with frontend base URL (/api)
app.use("/api/notes", require("./routes/notesRoutes"));

if (process.env.NODE_ENV === "production") {

app.use(express.static(path.join(__dirname,"./frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/dist","index.html"));
});
}




module.exports = app;