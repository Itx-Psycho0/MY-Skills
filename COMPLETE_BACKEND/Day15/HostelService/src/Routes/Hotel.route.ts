import express from "express";
import { getAllHotels } from "../controllers/hotel.controller.js";
import { validateSchema } from "../validation/ZodValidator.js";
import { hotelSchema } from "../validation/ZodSchemaHotel.js";

const hotelRouter = express.Router();

hotelRouter.get("/api", validateSchema(hotelSchema), getAllHotels);

export default hotelRouter;