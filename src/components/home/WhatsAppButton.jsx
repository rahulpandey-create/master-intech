import whatsappIcon from "../../assets/whatsapp.svg";

const MASTER_INTECH_WHATSAPP_MESSAGE =
  "Hi Master Intech Solutions, I’d like to get in touch with your team I have a question regarding your services and would like to discuss it further. Can we connect on WhatsApp?";

const WHATSAPP_LINK = `https://wa.me/919878263393?text=${encodeURIComponent(
  MASTER_INTECH_WHATSAPP_MESSAGE
)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}