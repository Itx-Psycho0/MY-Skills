const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');

const app = express();

// CORS configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',')
  : ['http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});
const upload = multer({storage: multer.memoryStorage()});
app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).json({
                message: "Image file is required. Use form-data with key 'image'."
            });
        }

        const result = await uploadFile(req.file.buffer);
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        });

        res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create post",
            error: error.message
        });
    }
})

app.get("/posts", async (req, res) => {
    try {
        const posts = await postModel.find().sort({createdAt: -1});
        res.status(200).json({
            message: "Posts fetched successfully",
            posts
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch posts",
            error: error.message
        });
    }
})

module.exports = app;