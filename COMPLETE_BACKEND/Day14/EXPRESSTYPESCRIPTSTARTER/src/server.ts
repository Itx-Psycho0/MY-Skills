import express from "express";
import type { Express } from "express";
import { config } from "./config/index.js";
import ping from "./router/ping.router.js";

const app: Express = express();

// Middleware and routes
app.use(ping);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});