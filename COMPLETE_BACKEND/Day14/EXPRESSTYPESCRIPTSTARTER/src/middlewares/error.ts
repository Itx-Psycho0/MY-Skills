import { AppError } from "../utils/AppError.js";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
        success: false,
        error: err
    });
};