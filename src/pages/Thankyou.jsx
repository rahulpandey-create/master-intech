import { Link } from "react-router-dom";
import whatsappIcon from "../assets/whatsapp.svg";
import arrowbtn from "../assets/arrowbtn.svg";

const MASTER_INTECH_PHONE_DISPLAY = "+91-98782 63393";
const MASTER_INTECH_PHONE_TEL = "+919878263393";
const MASTER_INTECH_WHATSAPP_LINK = "https://wa.me/919878263393";

export default function ThankYou() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-hero" aria-labelledby="thank-you-title">
        <div className="thank-you-grid" aria-hidden="true" />
        <div className="thank-you-glow thank-you-glow-one" aria-hidden="true" />
        <div className="thank-you-glow thank-you-glow-two" aria-hidden="true" />

        <div className="thank-you-container">
          <div className="thank-you-confirmation" data-reveal>
            <div className="thank-you-success-icon" aria-hidden="true">
              <span className="thank-you-checkmark" />
            </div>

            <p className="thank-you-eyebrow">MASTER INTECH SOLUTIONS</p>
            <h1 id="thank-you-title">Thank You!</h1>
            <p className="thank-you-message-title">Your enquiry has been successfully submitted.</p>
            <p className="thank-you-message">
              We&apos;ve received your details and our team will review your requirements. We&apos;ll get back to you shortly to discuss the next steps.
            </p>

            <div className="thank-you-divider" aria-hidden="true">
              <span />
              <i />
              <span />
            </div>

            <div className="thank-you-contact" data-reveal>
              <div className="thank-you-contact-copy">
                <p className="thank-you-section-label">NEED TO SPEAK WITH US?</p>
                <h2>Let&apos;s keep the conversation moving.</h2>
                <p>
                  Our team can discuss your requirements directly. Call us or start a WhatsApp conversation to continue the discussion.
                </p>
              </div>

              <div className="thank-you-contact-actions">
                <a
                  className="thank-you-phone"
                  href={`tel:${MASTER_INTECH_PHONE_TEL}`}
                  aria-label={`Call Master Intech Solutions at ${MASTER_INTECH_PHONE_DISPLAY}`}
                >
                  <span>PHONE</span>
                  <strong>{MASTER_INTECH_PHONE_DISPLAY}</strong>
                </a>

                <a
                  className="thank-you-whatsapp"
                  href={MASTER_INTECH_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Master Intech Solutions on WhatsApp"
                >
                  <span className="thank-you-whatsapp-icon">
                    <img src={whatsappIcon} alt="" aria-hidden="true" />
                  </span>
                  <span>Chat on WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <Link className="thank-you-home" to="/">
              Back to Home
              <img src={arrowbtn} alt="" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}