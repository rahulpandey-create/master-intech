const db = require("../config/db");

const createEnquiry = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required."
      });
    }

    const [result] = await db.execute(
      `INSERT INTO enquiries (name, email, message)
       VALUES (?, ?, ?)`,
      [name.trim(), email.trim(), message.trim()]
    );

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiryId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEnquiry
};