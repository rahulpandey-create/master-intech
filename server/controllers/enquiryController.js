const db = require("../config/db");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

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

    if (trimmedMessage.length > 15000) {
      return res.status(400).json({
        success: false,
        message: "Message cannot exceed 15000 characters.",
      });
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage);

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

    await resend.emails.send({
      from: "MIT Solutions <noreply@masterintechsolutions.com>",
      to: process.env.CONTACT_EMAIL,
      replyTo: trimmedEmail,
      subject: `New Contact Enquiry from ${trimmedName}`,

      html: `
        <div style="
          margin: 0;
          padding: 40px 20px;
          background-color: #080808;
          font-family: Arial, Helvetica, sans-serif;
          color: #ffffff;
        ">
          <div style="
            max-width: 700px;
            margin: 0 auto;
            background-color: #111111;
            border: 1px solid #292929;
            border-radius: 16px;
            overflow: hidden;
          ">

            <div style="
              padding: 30px 32px;
              border-bottom: 1px solid #292929;
              background-color: #151515;
            ">
              <div style="
                margin-bottom: 10px;
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #777777;
              ">
                MASTER INTECH SOLUTIONS
              </div>

              <div style="
                font-size: 28px;
                line-height: 1.3;
                font-weight: 700;
                color: #ffffff;
              ">
                New Contact Enquiry
              </div>

              <div style="
                margin-top: 8px;
                font-size: 14px;
                color: #888888;
              ">
                A new enquiry has been submitted through your website.
              </div>
            </div>

            <div style="padding: 30px 32px;">

              <div style="
                margin-bottom: 18px;
                padding: 18px 20px;
                background-color: #181818;
                border: 1px solid #292929;
                border-radius: 10px;
              ">
                <div style="
                  margin-bottom: 7px;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.5px;
                  text-transform: uppercase;
                  color: #777777;
                ">
                  Name
                </div>

                <div style="
                  font-size: 16px;
                  font-weight: 600;
                  color: #ffffff;
                ">
                  ${safeName}
                </div>
              </div>

              <div style="
                margin-bottom: 22px;
                padding: 18px 20px;
                background-color: #181818;
                border: 1px solid #292929;
                border-radius: 10px;
              ">
                <div style="
                  margin-bottom: 7px;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.5px;
                  text-transform: uppercase;
                  color: #777777;
                ">
                  Email
                </div>

                <div style="
                  font-size: 16px;
                  color: #ffffff;
                ">
                  ${safeEmail}
                </div>
              </div>

              <div style="
                margin-bottom: 12px;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #777777;
              ">
                Enquiry Details
              </div>

              <div style="
                padding: 22px;
                background-color: #181818;
                border: 1px solid #292929;
                border-radius: 12px;
              ">
                <div style="
                  font-size: 15px;
                  line-height: 1.8;
                  color: #dddddd;
                  white-space: pre-line;
                ">
                  ${safeMessage}
                </div>
              </div>

              <div style="
                margin-top: 28px;
                text-align: center;
              ">
                <a
                  href="mailto:${safeEmail}"
                  style="
                    display: inline-block;
                    padding: 13px 26px;
                    background-color: #ffffff;
                    color: #080808;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 700;
                    border-radius: 7px;
                  "
                >
                  Reply to Enquiry ↗
                </a>
              </div>

            </div>

            <div style="
              padding: 20px 32px;
              border-top: 1px solid #292929;
              background-color: #0d0d0d;
              text-align: center;
            ">
              <div style="
                font-size: 12px;
                color: #666666;
              ">
                This enquiry was submitted through the
                <span style="color: #999999;">
                  Master Intech Solutions
                </span>
                website.
              </div>
            </div>

          </div>
        </div>
      `,
    });

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