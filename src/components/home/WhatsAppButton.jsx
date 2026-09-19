import whatsappIcon from "../../assets/whatsapp.svg";

const WHATSAPP_LINK = "https://wa.me/919878263393";

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