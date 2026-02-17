const express = require('express');
const multer = require('multer');

const app = express();
app.use(express.json());
const upload = multer({storage: multer.memoryStorage()});
app.post("/create-post", upload.single("image"), async (req, res) => {
    const { image, caption } = req.body;
})

module.exports = app;