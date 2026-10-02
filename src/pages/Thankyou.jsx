import { Link } from "react-router-dom";
import whatsappIcon from "../assets/whatsapp.svg";
import arrowbtn from "../assets/arrowbtn.svg";
import arrowtick from "../assets/arrowtick.svg";

const MASTER_INTECH_WHATSAPP_MESSAGE =
  "Hi Master Intech Solutions, I’ve just submitted an enquiry through your website and would like to continue the conversation here.";

const MASTER_INTECH_WHATSAPP_LINK = `https://wa.me/919878263393?text=${encodeURIComponent(
  MASTER_INTECH_WHATSAPP_MESSAGE
)}`;

export default function ThankYou() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-hero" aria-labelledby="thank-you-title">
        <div className="thank-you-grid" aria-hidden="true" />
        <div className="thank-you-glow thank-you-glow-one" aria-hidden="true" />
        <div className="thank-you-glow thank-you-glow-two" aria-hidden="true" />

        <div className="thank-you-container">
          <div className="thank-you-confirmation" data-reveal>
            <div className="main-thanks">

              <div>
                <div className="thank-you-success-icon" aria-hidden="true">
                  <img src={arrowtick} />
                </div>
                <h1 id="thank-you-title"  >Thank You!</h1>
                <p className="thank-you-message-title">Your enquiry has been successfully submitted.</p>
                <p className="thank-you-message">
                  We&apos;ve received your details and our team will review your requirements. We&apos;ll get back to you shortly to discuss the next steps.
                </p>
                <a
                  className="thank-you-whatsapp"
                  href={MASTER_INTECH_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Master Intech Solutions on WhatsApp"
                >
                  <span className="thank-you-whatsapp-icon">
                    <img src={whatsappIcon} alt="WhatsApp" aria-hidden="true" />
                  </span>
                  <span>Chat on WhatsApp</span>
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