import dotenv from "dotenv";
type Config = {
    PORT: number;
};

function loadEnv() {
    dotenv.config();
}

loadEnv();


export const config: Config = {
    PORT: parseInt(process.env.PORT || "3001", 10),
};

