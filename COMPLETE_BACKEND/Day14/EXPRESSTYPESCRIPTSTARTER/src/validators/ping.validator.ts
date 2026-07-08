import { z } from "zod";

export const pingValidator = z.object({
    message: z.string().max(100)
});