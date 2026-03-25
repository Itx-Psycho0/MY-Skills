import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express()

const port = process.env.PORT || 3000

app.get("/api/quote",(req,res)=>{
    const quote = [
    {
        "id": 1,
        "name": "Steve Jobs",
        "description": "Stay hungry, stay foolish."
    },
    {
        "id": 2,
        "name": "Albert Einstein",
        "description": "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
        "id": 3,
        "name": "Bruce Lee",
        "description": "Be water, my friend."
    },
    {
        "id": 4,
        "name": "Nelson Mandela",
        "description": "It always seems impossible until it's done."
    },
    {
        "id": 5,
        "name": "Confucius",
        "description": "It does not matter how slowly you go as long as you do not stop."
    },
    {
        "id": 6,
        "name": "Elon Musk",
        "description": "When something is important enough, you do it even if the odds are not in your favor."
    },
    {
        "id": 7,
        "name": "Muhammad Ali",
        "description": "Don't count the days, make the days count."
    },
    {
        "id": 8,
        "name": "Mark Twain",
        "description": "The secret of getting ahead is getting started."
    },
    {
        "id": 9,
        "name": "Walt Disney",
        "description": "The way to get started is to quit talking and begin doing."
    },
    {
        "id": 10,
        "name": "Mahatma Gandhi",
        "description": "Be the change that you wish to see in the world."
    }
    ]
    res.json(quote)
})

app.use(express.static("dist"))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})