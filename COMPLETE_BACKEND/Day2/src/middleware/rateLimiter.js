const ratelimit = require("../config/upstash");

const rateLimiter = async (req, res, next) => {
  // Implement rate limiting logic here
  // For example, you can use a simple in-memory store to track request counts per IP address
  // Or you can integrate with a third-party service like Redis or Upstash for more robust rate limiting
    // If the request is within the allowed limit, call next() to proceed to the next middleware or route handler
    // If the request exceeds the limit, send a 429 Too Many Requests response

    try{
        const { success } = await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

module.exports = rateLimiter;