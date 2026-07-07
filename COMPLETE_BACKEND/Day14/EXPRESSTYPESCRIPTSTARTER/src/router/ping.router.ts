import express from "express";
import type { Router } from "express";
import pingController from "../controllers/ping.controller.js";

const ping: Router = express.Router();

function middleware(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log("Middleware executed");
    next();
}

ping.get("/ping", middleware, pingController);

export default ping;