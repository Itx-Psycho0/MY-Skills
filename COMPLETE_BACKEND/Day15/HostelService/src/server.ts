import express from "express";
import { config } from "./config/index.js";
import hotelRouter from "./Routes/Hotel.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import logger from "./config/loggers.js";
import { attachCorrelationIdMiddleware } from "./middlewares/correlationId.middleware.js";


const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// logger id middleware
app.use(attachCorrelationIdMiddleware);
// Use the hotel router
app.use('/hotel', hotelRouter);



// Error handling middleware
app.use(errorHandler);



app.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});