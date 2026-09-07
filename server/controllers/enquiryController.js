const db = require("../config/db");

const createEnquiry = async (req, res, next) => {
  try {
    const {
      name = "",
      email = "",
      message = "",
    } = req.body;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (trimmedMessage.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long.",
      });
    }

    if (trimmedMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Message cannot exceed 5000 characters.",
      });
    }

    const [result] = await db.execute(
      `
        INSERT INTO enquiries (name, email, message)
        VALUES (?, ?, ?)
      `,
      [
        trimmedName,
        trimmedEmail,
        trimmedMessage,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiryId: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEnquiry,
};