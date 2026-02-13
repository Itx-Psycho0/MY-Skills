const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT||5001;
connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
});