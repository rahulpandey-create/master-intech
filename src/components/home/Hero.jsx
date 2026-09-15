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

function StatIcon({ src, alt = "" }) {
  return <img src={src} alt={alt} />;
}

export default function Hero({ menuOpen, setMenuOpen }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <section
      id="hero"
      className="design-hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <nav className="design-nav" aria-label="Main navigation">
        <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>
          <button
            type="button"
            onClick={() => {
              scrollToSection("hero");
              closeMenu();
            }}
          >
            HOME
          </button>

          <button
            type="button"
            onClick={() => {
              scrollToSection("about");
              closeMenu();
            }}
          >
            ABOUT
          </button>

          <button
            type="button"
            onClick={() => {
              scrollToSection("services");
              closeMenu();
            }}
          >
            SERVICES
          </button>

          <button
            type="button"
            onClick={() => {
              scrollToSection("projects");
              closeMenu();
            }}
          >
            PROJECTS
          </button>
        </div>

        <button
          type="button"
          className="design-logo"
          aria-label="Master Intech Solutions home"
          onClick={() => scrollToSection("hero")}
        >
          <img src={logo} alt="Master Intech Solutions" />
        </button>

        <div className="design-nav-actions">
          <a
            className="hire"
            href="https://www.upwork.com/freelancers/~01e7473140f1676ff9"
            target="_blank"
            rel="noopener noreferrer"
          >
            HIRE US
          </a>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>

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
        <div>
          <StatIcon src={awardWinningIcon} />
          <span>
            Award winning
            <br />
            agency
          </span>
        </div>

        <i />

        <div>
          <StatIcon src={yearsExperienceIcon} />
          <span>
            Years
            <br />
            Experience
          </span>
        </div>

        <i />

        <div>
          <StatIcon src={happyClientsIcon} />
          <span>Happy Clients</span>
        </div>
      </div>

      <div className="hero-stat-card hero-stat-right hero-fade-in hero-delay-2">
        {heroServices.map(([icon, text]) => (
          <div key={text}>
            <StatIcon src={icon} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      <div className="hero-main">
        <p className="hero-pill hero-fade-in">Master Intech Solutions</p>

        <h1 className="hero-title hero-fade-in hero-delay-1">
          <span className="hero-title-line">BUILD DIGITAL SOLUTIONS</span>
          <span className="hero-title-line">
            THAT <em>DRIVE THE FUTURE</em>
          </span>
        </h1>

        <p className="hero-copy hero-fade-in hero-delay-2">
          We design and develop high-performance websites, intelligent
          solutions,
          <br className="desktop-only" />
          and digital experiences that help businesses grow and succeed.
        </p>

        <button
          type="button"
          className="cyan-button hero-fade-in hero-delay-3"
          onClick={() => scrollToSection("contact")}
        >
          LET&apos;S TALK <b>→</b>
        </button>
      </div>

      <div className="hero-socials hero-fade-in hero-delay-3">
        <div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM ↗
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            FACEBOOK ↗
          </a>
        </div>

        <span>CONNECT WITH US :</span>
      </div>
    </section>
  );
}