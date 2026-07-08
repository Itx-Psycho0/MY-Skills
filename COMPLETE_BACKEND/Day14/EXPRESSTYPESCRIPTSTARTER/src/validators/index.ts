import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod/v3";

export const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            res.status(400).json({
                message: "Invalid query params",
                success: false,
                error: error
            });
        }
    };
};