import moongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";

export const connectDB = async () => {
  try {
    const connection = await moongoose.connect(process.env.MONGO_URI, {
      dbName: DB_NAME,
    });
    console.log("DB connected successfully");
    console.log(connection);
  } catch (error) {
    console.log("Error while connecting with the database ", error);
    process.exit(1);
  }
};

