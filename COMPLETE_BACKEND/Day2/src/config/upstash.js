const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");
const dotenv = require("dotenv");
dotenv.config();

// Create a new ratelimiter, that allows 100 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "1 m"),
}); 

module.exports = ratelimit;