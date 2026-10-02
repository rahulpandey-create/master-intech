import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import WhatsAppButton from "../../components/home/WhatsAppButton"


export default function Footer() {

  return (
    <footer className="site-footer">
      <div>
        <h2 className="master-intech">MASTER INTECH SOLUTIONS</h2>

        <div className="footer-social">
          <span>
            <a href="https://www.facebook.com/MasterIntechSolutions/" target="_blank"><img src={facebook} alt="Facebook" /></a>
          </span>
          
          <span>
             <a href="https://www.instagram.com/mastersintechsolutions/" target="_blank"><img src={instagram} alt="Instagram" /></a>
          </span>
          <span>
             <a href="https://www.linkedin.com/in/master-intech-solutions-43ba9b39" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
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