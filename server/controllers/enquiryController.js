const db = require("../config/db");

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

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
        max-width: 650px;
        margin: 0 auto;
        background-color: #111111;
        border: 1px solid #292929;
        border-radius: 16px;
        overflow: hidden;
      ">

        <!-- Header -->
        <div style="
          padding: 28px 32px;
          border-bottom: 1px solid #292929;
          background: linear-gradient(135deg, #111111 0%, #171717 100%);
        ">

          <div style="
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #8f8f8f;
            margin-bottom: 10px;
          ">
            MASTER INTECH SOLUTIONS
          </div>

          <h1 style="
            margin: 0;
            font-size: 28px;
            line-height: 1.2;
            font-weight: 700;
            color: #ffffff;
          ">
            New Contact Enquiry
          </h1>

          <p style="
            margin: 10px 0 0;
            font-size: 14px;
            color: #8f8f8f;
          ">
            A new enquiry has been submitted through your website.
          </p>

        </div>


        <!-- Enquiry Details -->
        <div style="padding: 32px;">

          <div style="
            margin-bottom: 20px;
            padding: 18px;
            background-color: #181818;
            border: 1px solid #292929;
            border-radius: 10px;
          ">

            <div style="
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              color: #777777;
              margin-bottom: 7px;
            ">
              Name
            </div>

            <div style="
              font-size: 16px;
              font-weight: 600;
              color: #ffffff;
            ">
              ${trimmedName}
            </div>

          </div>


          <div style="
            margin-bottom: 20px;
            padding: 18px;
            background-color: #181818;
            border: 1px solid #292929;
            border-radius: 10px;
          ">

            <div style="
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              color: #777777;
              margin-bottom: 7px;
            ">
              Email
            </div>

            <div style="
              font-size: 16px;
              color: #ffffff;
            ">
              ${trimmedEmail}
            </div>

          </div>


          <div style="
            padding: 20px;
            background-color: #181818;
            border: 1px solid #292929;
            border-radius: 10px;
          ">

            <div style="
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              color: #777777;
              margin-bottom: 10px;
            ">
              Message
            </div>

            <div style="
              font-size: 15px;
              line-height: 1.7;
              color: #dddddd;
              white-space: pre-line;
            ">
              ${trimmedMessage}
            </div>

          </div>


          <!-- Reply Button -->
          <div style="
            margin-top: 28px;
            text-align: center;
          ">

            <a
              href="mailto:${trimmedEmail}"
              style="
                display: inline-block;
                padding: 13px 26px;
                background-color: #ffffff;
                color: #080808;
                text-decoration: none;
                font-size: 14px;
                font-weight: 700;
                border-radius: 6px;
              "
            >
              Reply to Enquiry ↗
            </a>

          </div>

        </div>


        <!-- Footer -->
        <div style="
          padding: 20px 32px;
          border-top: 1px solid #292929;
          background-color: #0d0d0d;
          text-align: center;
        ">

          <p style="
            margin: 0;
            font-size: 12px;
            color: #666666;
          ">
            This enquiry was submitted through the
            <span style="color: #999999;">
              Master Intech Solutions
            </span>
            website.
          </p>

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