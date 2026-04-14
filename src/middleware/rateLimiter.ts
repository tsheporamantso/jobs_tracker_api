import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100, // max 5 request per IP,
  message: {
    success: false,
    msg: "Too many requests sent. Try again later.",
  },
});
