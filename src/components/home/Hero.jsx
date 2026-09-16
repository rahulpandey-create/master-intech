import logo from "../../assets/logomaster.svg";
import heroBackground from "../../assets/bgvid.gif";
import awardWinningIcon from "../../assets/awardWinningAgency.png";
import yearsExperienceIcon from "../../assets/yearsExperience.png";
import happyClientsIcon from "../../assets/happyClients.png";
import uiuxIcon from "../../assets/UIUXdesign.png";
import webDevelopmentIcon from "../../assets/WebDevelopment.png";
import brandingIcon from "../../assets/Branding.png";
import seoIcon from "../../assets/SEO.png";
import aiSolutionsIcon from "../../assets/AISolutions.png";
import arrowbtn from "../../assets/arrowbtn.svg";
import arrowtop from "../../assets/arrowtop.svg";
import platform from "../../assets/platform.svg";

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

  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMenu();
  };

  const currentPath = window.location.pathname;
  return (
<<<<<<< HEAD
<section id="hero" className="design-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
  <nav className="design-nav" aria-label="Main navigation">
    <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>
      <a href="#hero" onClick={closeMenu}>HOME</a>
      <a href="#about" onClick={closeMenu}>ABOUT</a>
      <a href="#services" onClick={closeMenu}>SERVICES</a>
      <a href="#projects" onClick={closeMenu}>Portfolio</a>
    </div>
=======
    <section id="hero" className="design-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <nav className="design-nav" aria-label="Main navigation">
        <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>
          <a href={currentPath} onClick={(event) => handleSectionLink(event, "hero")}>HOME</a>
          <a href={currentPath} onClick={(event) => handleSectionLink(event, "about")}>ABOUT</a>
          <a href={currentPath} onClick={(event) => handleSectionLink(event, "services")}>SERVICES</a>
          <a href={currentPath} onClick={(event) => handleSectionLink(event, "projects")}>PROJECTS</a>
        </div>
>>>>>>> cc461244db7bdb7c1a2f318009474cd089bc9d3e

        <a href={currentPath} onClick={(event) => handleSectionLink(event, "hero")} className="design-logo" aria-label="Master Intech Solutions home">
          <img src={logo} alt="Master Intech Solutions" />
        </a>

        <div className="design-nav-actions">
          <a
            className="hire"
            href="http://upwork.com/freelancers/~01e7473140f1676ff9"
            target="_blank"
            rel="noreferrer"
          >
            HIRE US
          </a>
          <a href={currentPath} onClick={(event) => handleSectionLink(event, "contact")}>CONTACT</a>
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
          BUILD DIGITAL SOLUTIONS <br></br>
          THAT DRIVE THE FUTURE
        </h1>
        <p className="hero-copy hero-fade-in hero-delay-2">
          We design and develop high-performance websites, intelligent solutions,
          and digital experiences that help businesses grow and succeed.
        </p>
        <a className="cyan-button hero-fade-in hero-delay-3 btnn" href={currentPath} onClick={(event) => handleSectionLink(event, "contact")}>LET'S TALK <span><img src={arrowbtn} alt="arrow"></img></span></a>
        <div className="connects block xl:hidden md:hidden mt-5">
          <h3>Connect With Us</h3>
          <img src={platform} alt="" className=" m-auto block "></img>

        </div>
      </div>

      <div className="hero-socials hero-fade-in hero-delay-3">
        <div>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="socialmedialinks1">LINKEDIN <span><img src={arrowtop} alt="arrow"></img></span></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="socialmedialinks1">INSTAGRAM <span><img src={arrowtop} alt="arrow"></img></span></a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="socialmedialinks1">FACEBOOK <span><img src={arrowtop} alt="arrow"></img></span></a>
        </div>
        <span className="socialmedialinks1">CONNECT WITH US : <span><img src={platform} alt="arrow"></img></span>
        </span>
      </div>
    </section>

  );
}