import express from "express";
import type { Express } from "express";
import { config } from "./config/index.js";
import ping from "./router/ping.router.js";
import { errorHandler } from "./middlewares/error.js";

const app: Express = express();

// Middleware and routes
app.use(express.json());
app.use(ping);



// Error handling middleware
app.use(errorHandler);

// Start the server

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});