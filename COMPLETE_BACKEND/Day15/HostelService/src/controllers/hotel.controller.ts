import type { Request, Response } from "express";
import { InternalServerError } from "../utils/AppError.error.js";
import logger from "../config/loggers.js";


async function getAllHotels(req: Request, res: Response) {
    try {
        logger.info("getall hotel request received")
        console.log(req.body);

        res.status(200).json({
            message: "Hotels fetched successfully",
            success: true
        })
    } catch (error) {
        throw new InternalServerError("Failed to fetch hotels");
    }
}

export { getAllHotels };