import { ZodObject } from "zod";
import type { Request, Response, NextFunction } from "express";

function validateSchema(schema: ZodObject<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
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