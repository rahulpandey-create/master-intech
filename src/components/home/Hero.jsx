import logo from "../../assets/MasterIntechLogo.png";
import heroBackground from "../../assets/HeroSectionBackGroundImage.png";
import awardWinningIcon from "../../assets/awardWinningAgency.png";
import yearsExperienceIcon from "../../assets/yearsExperience.png";
import happyClientsIcon from "../../assets/happyClients.png";
import uiuxIcon from "../../assets/UIUXdesign.png";
import webDevelopmentIcon from "../../assets/WebDevelopment.png";
import brandingIcon from "../../assets/Branding.png";
import seoIcon from "../../assets/SEO.png";
import aiSolutionsIcon from "../../assets/AISolutions.png";

const heroServices = [
  [uiuxIcon, "UI/UX Design"],
  [webDevelopmentIcon, "Web Development"],
  [brandingIcon, "Branding"],
  [seoIcon, "SEO"],
  [aiSolutionsIcon, "AI Solutions"],
];

function StatIcon({ src, alt = "" }) { return <img src={src} alt={alt} />; }

export default function Hero({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);
  return (
<section id="hero" className="design-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
  <nav className="design-nav" aria-label="Main navigation">
    <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>
      <a href="#hero" onClick={closeMenu}>HOME</a>
      <a href="#about" onClick={closeMenu}>ABOUT</a>
      <a href="#services" onClick={closeMenu}>SERVICES</a>
      <a href="#projects" onClick={closeMenu}>PROJECTS</a>
    </div>

    <a href="#hero" className="design-logo" aria-label="Master Intech Solutions home">
      <img src={logo} alt="Master Intech Solutions" />
    </a>

    <div className="design-nav-actions">
      <a className="hire" href="#contact">HIRE US</a>
      <a href="#contact">CONTACT</a>
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </div>
  </nav>

  <div className="hero-stat-card hero-stat-left hero-fade-in hero-delay-1">
    <div><StatIcon src={awardWinningIcon} /><span>Award winning<br />agency</span></div>
    <i />
    <div><StatIcon src={yearsExperienceIcon} /><span>Years<br />Experience</span></div>
    <i />
    <div><StatIcon src={happyClientsIcon} /><span>Happy Clients</span></div>
  </div>

  <div className="hero-stat-card hero-stat-right hero-fade-in hero-delay-2">
    {heroServices.map(([icon, text]) => (
      <div key={text}><StatIcon src={icon} /><span>{text}</span></div>
    ))}
  </div>

  <div className="hero-main">
    <p className="hero-pill hero-fade-in">Master Intech Solutions</p>
    <h1 className="hero-title hero-fade-in hero-delay-1">
      <span className="hero-title-line">BUILD DIGITAL SOLUTIONS</span>
      <span className="hero-title-line">THAT <em>DRIVE THE FUTURE</em></span>
    </h1>
    <p className="hero-copy hero-fade-in hero-delay-2">
      We design and develop high-performance websites, intelligent solutions,<br className="desktop-only" />
      and digital experiences that help businesses grow and succeed.
    </p>
    <a className="cyan-button hero-fade-in hero-delay-3" href="#contact">LET&apos;S TALK <b>→</b></a>
  </div>

  <div className="hero-socials hero-fade-in hero-delay-3">
    <div>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">FACEBOOK ↗</a>
    </div>
    <span>CONNECT WITH US :</span>
  </div>
</section>

  );
}