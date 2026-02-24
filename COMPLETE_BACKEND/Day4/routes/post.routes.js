const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');  
const router = express.Router();
router.post('/create', async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: decoded.id});
        console.log(user);
        req.userId = decoded.userId;

    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }        req.userId = decoded.userId;
    });

    console.log('Request Body:', req.body);
    console.log('Cookies:', req.cookies);
    res.send({ message: 'Post created successfully', data: req.body, cookies: req.cookies });
});
module.exports = router;