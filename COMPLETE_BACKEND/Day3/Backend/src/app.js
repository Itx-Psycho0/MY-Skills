const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');

const app = express();
app.use(express.json());
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