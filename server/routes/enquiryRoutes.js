const express = require("express");

const { createEnquiry } = require("../controllers/enquiryController");
const enquiryLimiter = require("../middleware/enquiryLimiter");

const router = express.Router();

router.post("/", enquiryLimiter, createEnquiry);

module.exports = router;