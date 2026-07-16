import { ZodObject } from "zod";
import type { Request, Response, NextFunction } from "express";
import logger from "../config/loggers.js";

function validateSchema(schema: ZodObject<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info("Validating request body against schema");
            schema.parse(req.body);
            logger.info("Request body validation successful");
            next();
        } catch (error) {
            res.status(400).json({
                message: "Validation error",
                error: error,
                success: false
            });
        }
    };
}

export { validateSchema };