import type { Request, Response, NextFunction } from "express";
import type { AppError } from "../utils/AppError.error.js";

export function errorHandler(err: AppError, req: Request, res: Response, next: NextFunction) {
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
        success: false
    });
}