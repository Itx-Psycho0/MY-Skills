import express from "express";
import { config } from "./config/index.js";
import hotelRouter from "./Routes/Hotel.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the hotel router
app.use('/hotel', hotelRouter);



// Error handling middleware
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});