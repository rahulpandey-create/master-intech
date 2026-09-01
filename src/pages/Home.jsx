import { useState } from "react";
import { submitEnquiry } from "../services/api";
import logo from "../assets/MasterIntechLogo.png";
import heroBackground from "../assets/HeroSectionBackGroundImage.png";
import awardWinningIcon from "../assets/awardWinningAgency.png";
import yearsExperienceIcon from "../assets/yearsExperience.png";
import happyClientsIcon from "../assets/happyClients.png";
import uiuxIcon from "../assets/UIUXdesign.png";
import webDevelopmentIcon from "../assets/WebDevelopment.png";
import brandingIcon from "../assets/Branding.png";
import seoIcon from "../assets/SEO.png";
import aiSolutionsIcon from "../assets/AISolutions.png";
import aboutImage from "../assets/design/2.png";
import abstractLeft from "../assets/design/9.png";
import abstractRight from "../assets/design/10.png";
import client1 from "../assets/design/11.png";
import client2 from "../assets/design/12.png";
import client3 from "../assets/design/13.png";
import client4 from "../assets/design/14.png";
import client5 from "../assets/design/15.png";
import client6 from "../assets/design/16.png";
import recommendMe from "../assets/design/17.png";
import kollex from "../assets/design/18.png";
import celquence from "../assets/design/19.png";
import workStudy from "../assets/design/20.png";
import smartbol from "../assets/design/21.png";
import enigmaNova from "../assets/design/22.png";
import chamundi from "../assets/design/23.png";
import infraOptics from "../assets/design/24.png";
import kyros from "../assets/design/25.png";
import footerLogo from "../assets/design/26.png";
import designBrand1 from "../assets/design/8.png";
import designBrand2 from "../assets/design/7.png";
import designBrand3 from "../assets/design/6.png";
import upwork from "../assets/design/27.png";
import topCert from "../assets/design/28.png";
import "./Home.css";

const expertise = ["Figma", "Ps", "W", "HTML"];
const services = [
  ["01", "WEB DEVELOPMENT"],
  ["02", "MOBILE APP"],
  ["03", "UI/UX DESIGN"],
  ["04", "DIGITAL MARKETING"],
  ["05", "CMS DEVELOPMENT"],
  ["06", "E-COMMERCE SOLUTIONS"],
];

function StatIcon({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ success: "", error: "" });

  const updateField = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ success: "", error: "" });
    try {
      const data = await submitEnquiry(formData);
      setFeedback({ success: data.message, error: "" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback({ success: "", error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-home">
      <section id="hero" className="design-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <nav className="design-nav">
          <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#hero" onClick={closeMenu}>HOME</a>
            <a href="#about" onClick={closeMenu}>ABOUT</a>
            <a href="#services" onClick={closeMenu}>SERVICES</a>
            <a href="#projects" onClick={closeMenu}>PROJECTS</a>
          </div>
          <a href="#hero" className="design-logo"><img src={logo} alt="Master Intech Solutions" /></a>
          <div className="design-nav-actions">
            <a className="hire" href="#contact">HIRE US</a>
            <a href="#contact">CONTACT</a>
            <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
              <span /><span />
            </button>
          </div>
        </nav>

        <div className="hero-stat-card hero-stat-left">
          <div><StatIcon src={awardWinningIcon} alt="" /><span>Award winning<br />agency</span></div>
          <i />
          <div><StatIcon src={yearsExperienceIcon} alt="" /><span>Years<br />Experience</span></div>
          <i />
          <div><StatIcon src={happyClientsIcon} alt="" /><span>Happy Clients</span></div>
        </div>
        <div className="hero-stat-card hero-stat-right">
          {[[uiuxIcon, "UI/UX Design"], [webDevelopmentIcon, "Web Development"], [brandingIcon, "Branding"], [seoIcon, "SEO"], [aiSolutionsIcon, "AI Solutions"]].map(([icon, text]) => (
            <div key={text}><StatIcon src={icon} alt="" /><span>{text}</span></div>
          ))}
        </div>

        <div className="hero-main">
          <p className="hero-pill">Master Intech Solutions</p>
          <h1>BUILD DIGITAL SOLUTIONS<br />THAT <span>DRIVE THE FUTURE</span></h1>
          <p className="hero-copy">We design and develop high-performance websites, intelligent solutions,<br className="desktop-only" /> and digital experiences that help businesses grow and succeed.</p>
          <a className="cyan-button" href="#contact">LET'S TALK <b>→</b></a>
        </div>

        <div className="hero-socials">
          <div><a href="#contact">LINKEDIN ↗</a><a href="#contact">INSTAGRAM ↗</a><a href="#contact">FACEBOOK ↗</a></div>
          <span>CONNECT WITH US : </span>
        </div>
      </section>

      <section className="expertise-strip">
        <div className="section-shell expertise-inner">
          <div><h2>OUR EXPERTISE</h2><p>Innovative technologies. Creative<br />solutions. Exceptional results.</p></div>
          <div className="expertise-tools">
            {expertise.map((item) => <div className="tool-circle" key={item}><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="about-design">
        <div className="section-shell about-grid">
          <div className="about-wordmark"><span>DEVELOPMENT</span><span>BRANDING</span><span>DESIGN</span><div className="ratings">◉ 45 RATINGS &nbsp; ★ 5 RATINGS</div></div>
          <div className="about-intro"><p className="eyebrow">ABOUT US</p><h2>WHAT WE DO</h2><p>Innovative technologies. Creative solutions.<br />Exceptional results.</p><img src={aboutImage} alt="Developer working at a computer" /></div>
        </div>
      </section>

      <section id="projects" className="award-section">
        <div className="section-shell award-grid">
          <div className="award-art"><img src={abstractLeft} alt="Abstract colorful 3D artwork" /></div>
          <div className="award-copy"><h2>AWARD-WINNING MANCHESTER WEB DESIGN<br />&amp; BRANDING AGENCY SINCE 2008.</h2><div className="avatars"><img src={client1} alt="" /><img src={client2} alt="" /><img src={client3} alt="" /><img src={client4} alt="" /><b>+</b></div><p>Driven by innovation, we deliver cutting-edge<br />IT solutions that empower businesses to grow.</p><div className="stats"><div><strong>12K+</strong><span>Clients Satisfied and<br />Repeating</span></div><div><strong>7.1K</strong><span>Projects Completed in 24<br />Countries</span></div></div><a className="outline-button" href="#contact">♧ &nbsp; Let's Discuss Your Idea</a></div>
        </div>
      </section>

      <section className="brands-section">
        <div className="section-shell">
          <div className="center-heading"><h2>TRUSTED BY TOP BRANDS</h2><p>Empowering businesses with trusted<br />digital solutions</p></div>
          <div className="brand-grid">
            {[{src: designBrand1, alt: "Jacaranda"}, {src: recommendMe, alt: "RecommendMe"}, {src: designBrand2, alt: "Ellebelme"}, {src: designBrand3, alt: "Medi Sync"}, {src: kollex, alt: "Kollex"}, {src: chamundi, alt: "Chamundi"}, {src: smartbol, alt: "Smartbol"}, {src: workStudy, alt: "Work & Study"}, {src: enigmaNova, alt: "Enigma Nova"}, {src: celquence, alt: "Celquence"}, {src: infraOptics, alt: "Infra Optics"}, {src: kyros, alt: "Kyros Infra"}].map((brand) => <div key={brand.alt}><img src={brand.src} alt={brand.alt} /></div>)}
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="section-shell feedback-grid">
          <div className="floating-people"><img src={client2} alt="" /><img src={client3} alt="" /><img src={client4} alt="" /><img src={client5} alt="" /><img src={client6} alt="" /></div>
          <div className="testimonial-photo"><img src={client6} alt="Client portrait" /><div><strong>BERNIE LEIGH</strong><span>Director, Luxor</span></div></div>
          <div className="testimonial-copy"><h2>CLIENT'S<br />FEEDBACK</h2><p>Real feedback from businesses we've<br />helped through thoughtful design,<br />development, and reliable support.</p><button className="review-button">G &nbsp; See All Reviews</button></div>
          <img className="feedback-art" src={abstractRight} alt="Abstract colorful 3D artwork" />
        </div>
      </section>

      <section id="contact" className="contact-design">
        <div className="section-shell contact-grid">
          <div className="contact-details">
            <h2>LET'S TALK</h2><p>Tell us about your project —whether it's<br />a website, SEO, or marketing.</p><div className="contact-rule" />
            <div className="contact-line"><b>●</b><div><strong>Phone</strong><span>+91-98782 63393<br />+91-98068 85887</span></div><b>●</b><div><strong>Email</strong><span>info@masterintechsolutions.com</span></div></div>
            <div className="contact-line address"><b>●</b><div><strong>Address</strong><span>SCF 36 Phase X1, Sector 65,<br />Sahibzada Ajit Singh Nagar, Punjab 160055</span></div></div>
          </div>
          <form className="message-card" onSubmit={handleSubmit}><p>MIT Solutions</p><h3>LEAVE A MESSAGE</h3><label>NAME*<input name="name" value={formData.name} onChange={updateField} required /></label><label>EMAIL*<input name="email" type="email" value={formData.email} onChange={updateField} required /></label><label>MESSAGE*<textarea name="message" value={formData.message} onChange={updateField} required /></label><button disabled={loading}>{loading ? "SENDING..." : "Send Message"}</button>{feedback.success && <small className="success">{feedback.success}</small>}{feedback.error && <small className="error">{feedback.error}</small>}</form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-shell">
          <div className="footer-brand"><img src={footerLogo} alt="Master Intech Solutions" /><p>Delivering Reliable Tech<br />Solutions for a Smarter<br />Tomorrow.</p><div className="footer-social">● &nbsp;◉ &nbsp;◎ &nbsp;in</div></div>
          <div><h3>Quick links</h3><a href="#hero">Home</a><a href="#about">About Us</a><a href="#projects">Portfolio</a><a href="#contact">Contact Us</a></div>
          <div id="services"><h3>Services</h3>{services.slice(0, 5).map(([, title]) => <a href="#contact" key={title}>{title.replace("E-COMMERCE SOLUTIONS", "E-Commerce Solutions")}</a>)}</div>
          <div className="footer-growth"><h3>Let us help you grow<br />your business</h3><div><img src={upwork} alt="Upwork Top Rated" /><img src={topCert} alt="Top certification" /></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Master Intech Solutions</span><span>Registration No : 03AATFM8663C1ZO</span></div>
      </footer>
    </main>
  );
}

export default Home;
