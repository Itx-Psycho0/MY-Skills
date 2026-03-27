import dotenv from "dotenv";
import { connectDB } from "./db/db";


dotenv.config({
    path:"./.env"
});

const startServer = async () => {
  await connectDB();
}

startServer();
