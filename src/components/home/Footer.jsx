import footerLogo from "../../assets/design/26.png";
import upwork from "../../assets/design/27.png";
import topCert from "../../assets/design/28.png";
import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import WhatsAppButton from "../../components/home/WhatsAppButton"

const services = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Digital Marketing",
  "CMS Development",
  "E-Commerce Solutions",
];

export default function Footer() {
  const currentPath = window.location.pathname;

  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="site-footer">
      <div>
        <h2 className="master-intech">MASTER INTECH SOLUTIONS</h2>

        <div className="footer-social">
          <span>
            <a href="https://www.facebook.com/MasterIntechSolutions/" target="_blank"><img src={facebook} /></a>
          </span>
          
          <span>
             <a href="https://www.instagram.com/mastersintechsolutions/" target="_blank"><img src={instagram} /></a>
          </span>
          <span>
             <a href="https://www.linkedin.com/in/master-intech-solutions-43ba9b39" target="_blank"><img src={linkedin} /></a>
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Master Intech Solutions</span>
        <span>Registration No : 03AATFM8663C1ZO</span>
      </div>
      
      <WhatsAppButton/>
    </footer>
  );
}