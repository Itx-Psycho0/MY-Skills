import { z } from "zod";

const hotelSchema = z.object({
    name: z.string().min(1).max(100),
});

export { hotelSchema };