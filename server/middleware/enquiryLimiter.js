const rateLimit = require("express-rate-limit");

const enquiryLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,

  max: 6,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many enquiries submitted. Please try again later.",
  },
});

module.exports = enquiryLimiter;