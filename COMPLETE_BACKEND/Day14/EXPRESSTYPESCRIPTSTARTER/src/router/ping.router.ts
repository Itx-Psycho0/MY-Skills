import express from "express";
import type { Router } from "express";
import pingController from "../controllers/ping.controller.js";
import { validateRequest } from "../validators/index.js";
import { pingValidator } from "../validators/ping.validator.js";

const ping: Router = express.Router();

function middleware(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log("Middleware executed");
    next();
}

ping.get("/ping", middleware, validateRequest(pingValidator), pingController);

export default ping;