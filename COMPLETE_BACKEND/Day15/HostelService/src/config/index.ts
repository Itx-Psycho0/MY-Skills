import dotenv from "dotenv";

type Config = {
    PORT: number;
}

function loadConfig() {
    dotenv.config();
}
loadConfig();

export const config: Config = {
    PORT: parseInt(process.env.PORT || "3000", 10)
};