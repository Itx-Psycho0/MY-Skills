
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./db/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
