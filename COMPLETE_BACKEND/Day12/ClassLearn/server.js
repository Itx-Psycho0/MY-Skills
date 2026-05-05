import express from "express";
import { arr } from "./src/db/array.js";

const app = express();




app.use(express.json());


// Rate Limiting Middleware
const rateLimit = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();
  if (!rateLimit[ip]) {
    rateLimit[ip] = { count: 1, lastTime: currentTime };
    next();
  } else {
    const timeDifference = currentTime - rateLimit[ip].lastTime;
    if (timeDifference < 6000) {
      rateLimit[ip].count += 1;
      if (rateLimit[ip].count > 5) {
        return res.status(429).json({ message: "Too many requests" });
      }
    } else {
      rateLimit[ip] = { count: 1, lastTime: currentTime };
    }
    next();
  }
};

app.use(rateLimit);
app.get("/array", (req, res) => {
  res.json(arr);
});

app.post("/array", (req, res) => {
  const { number } = req.body;
  arr.push(number);
  res.json({ message: "Number added to array", array: arr });
}

);

app.get("/array/:id", (req, res) => {
  const { id } = req.params;
  const number = arr[id];
  if (number) {
    res.json({ number });
  } else {
    res.status(404).json({ message: "Number not found" });
  }
});

app.delete("/array/:id", (req, res) => {
  const { id } = req.params;
  if (arr[id]) {
    arr.splice(id, 1);
    res.json({ message: "Number deleted from array", array: arr });
  } else {
    res.status(404).json({ message: "Number not found" });
  }
});

app.put("/array/:id", (req, res) => {
  const { id } = req.params;
  const { number } = req.body;
  if (arr[id]) {
    arr[id] = number;
    res.json({ message: "Number updated in array", array: arr });
  } else {
    res.status(404).json({ message: "Number not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});