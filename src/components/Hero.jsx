import "./Hero.css";

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

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <nav className="hero-nav">
        <div className="nav-links">
          <a href="#hero">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
        </div>

        <div className="nav-logo">
          <img src={logo} alt="Master Intech Logo" />
        </div>

        <div className="nav-actions">
          <a href="#contact" className="hire-link">
            HIRE US
          </a>

          <a href="#contact">CONTACT</a>

          <button className="menu-button" type="button">
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* LEFT CARD */}
      <div className="hero-side-card hero-left-card">
        <div className="hero-card-item">
          <img src={awardWinningIcon} alt="" />
          <span>
            Award Winning
            <br />
            agency
          </span>
        </div>

        <div className="hero-card-divider"></div>

        <div className="hero-card-item">
          <img src={yearsExperienceIcon} alt="" />
          <span>
            Years
            <br />
            Experience
          </span>
        </div>

        <div className="hero-card-divider"></div>

        <div className="hero-card-item">
          <img src={happyClientsIcon} alt="" />
          <span>Happy Clients</span>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="hero-side-card hero-right-card">
        <div className="hero-card-item">
          <img src={uiuxIcon} alt="" />
          <span>UI/UX Design</span>
        </div>

        <div className="hero-card-divider"></div>

        <div className="hero-card-item">
          <img src={webDevelopmentIcon} alt="" />
          <span>Web Development</span>
        </div>

        <div className="hero-card-divider"></div>

        <div className="hero-card-item">
          <img src={brandingIcon} alt="" />
          <span>Branding</span>
        </div>

        <div className="hero-card-divider"></div>

        <div className="hero-card-item">
          <img src={seoIcon} alt="" />
          <span>SEO</span>
        </div>

        <div className="hero-card-divider"></div>

        <div className="hero-card-item">
          <img src={aiSolutionsIcon} alt="" />
          <span>AI Solutions</span>
        </div>
      </div>
      {/* HERO CONTENT */}
      <div className="hero-content">
        <p className="hero-label">Master Intech Solutions</p>

        <h1>
          BUILD DIGITAL SOLUTIONS
          <br />
          THAT{" "}
          <span className="hero-highlight">
            DRIVE THE FUTURE
          </span>
        </h1>

        <p className="hero-description">
          We design and develop high-performance websites, intelligent
          solutions, and digital experiences that help businesses grow and
          succeed
        </p>

        <a href="#contact" className="hero-button">
          <span>LET'S TALK</span>
          <span className="hero-button-arrow"></span>
        </a>

        <div className="hero-social-strip">
          <div className="hero-social-links">
            <a href="#" target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              INSTAGRAM ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              FACEBOOK ↗
            </a>
          </div>

          <div className="hero-connect">
            <span>CONNECT WITH US</span>
            <span>:</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;