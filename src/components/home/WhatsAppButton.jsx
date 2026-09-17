import whatsappIcon from "../../assets/whatsapp.svg";

const WHATSAPP_LINK = "https://wa.me/919878263393"; // this is a dummy link replace it later with your direct link

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