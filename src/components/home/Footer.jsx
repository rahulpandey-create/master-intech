import footerLogo from "../../assets/design/26.png";
import upwork from "../../assets/design/27.png";
import topCert from "../../assets/design/28.png";
import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const services = ["Web Development", "Mobile App", "UI/UX Design", "Digital Marketing", "CMS Development", "E-Commerce Solutions"];

export default function Footer() {
  return (
<footer className="site-footer">
  <div>
    <h2 className="master-intech">MASTER INTECH SOLUTIONS</h2>
     <div className="footer-social">
        <span><img src={facebook}></img> </span>
        <span><img src={whatsapp}></img> </span>
        <span><img src={instagram}></img> </span>
        <span><img src={linkedin}></img> </span>
  
      </div>
  </div>
  {/* <div className="footer-main section-shell">
    <div className="footer-brand">
      <img src={footerLogo} alt="Master Intech Solutions" />
      <p>Delivering Reliable Tech<br />Solutions for a Smarter<br />Tomorrow.</p>
      <div className="footer-social">
        <span><img src={facebook}></img> </span>
        <span><img src={whatsapp}></img> </span>
        <span><img src={instagram}></img> </span>
        <span><img src={linkedin}></img> </span>
  
      </div>
    </div>
    <div>
      <h3>Quick links</h3>
      <a href="#hero">Home</a>
      <a href="#about">About Us</a>
      <a href="#projects">Portfolio</a>
      <a href="#contact">Contact Us</a>
    </div>
    <div>
      <h3>Services</h3>
      {services.map((service) => <a href="#contact" key={service}>{service}</a>)}
    </div>
    <div className="footer-growth">
      <h3>Let us help you grow<br />your business</h3>
      <div><img src={upwork} alt="Upwork Top Rated" /><img src={topCert} alt="Top certification" /></div>
    </div>
  </div> */}
  <div className="footer-bottom"><span>© 2026 Master Intech Solutions</span><span>Registration No : 03AATFM8663C1ZO</span></div>
</footer>
  );
}