// import logo from "../../assets/logomaster.svg";
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
import arrowhitee from "../../assets/arrowhitee.svg";
import arrowtop from "../../assets/arrowtop.svg";
import platform from "../../assets/platform.svg";
import upworks from "../../assets/upworks.png";
import people from "../../assets/people.png";
import truelancer from "../../assets/truelancer.png";
import gmail from "../../assets/gmail.png";
import { Link } from "react-router-dom";


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
    <section
      id="hero"
      className="design-hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >

      {/* <DesignNav
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
/> */}

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
            15+ Years
            <br />
            Experience
          </span>
        </div>

        <i />

        <div>
          <StatIcon src={happyClientsIcon} />
          <span>50K+ Happy Clients</span>
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
        {/* <p className="hero-pill hero-fade-in">Master Intech Solutions</p> */}
        <div class="tech-line">
          <span>AI</span>
          <i>•</i>
          <span>CLOUD</span>
          <i>•</i>
          <span>SOFTWARE</span>
          <i>•</i>
          <span>DIGITAL TRANSFORMATION</span>
        </div>
        <h1 className="hero-title hero-fade-in hero-delay-1">
          BUILDING INTELLIGENT DIGITAL <br />
          SOLUTIONS FOR A FASTER FUTURE
        </h1>

        <p className="hero-copy hero-fade-in hero-delay-2">
          We help businesses transform ideas into scalable digital products with AI, automation, cloud, and modern software engineering.
        </p>

        <a
          className="cyan-button hero-fade-in hero-delay-3 btnn"
          href={currentPath}
          onClick={(event) => handleSectionLink(event, "contact")}
        >
          START A PROJECT{" "}
          <span>
            <img src={arrowbtn} alt="arrow" />
          </span>
        </a>
        <a
          className="cyan-button hero-fade-in hero-delay-3 btnn btn-one"
          href="/startup-offer"
        >
          SPECIAL OFFERS FOR NEW BUSINESS?{" "}
          <span>
            <img src={arrowhitee} alt="arrow" />
          </span>
        </a>

        <div className="connects block xl:hidden md:hidden mt-5">
          <h3>Connect With Us</h3>
          <span className="socialmedialinks1">
            <span>
              <a href="https://www.upwork.com/freelancers/~01e7473140f1676ff9" target="_blank"><img src={upworks} alt="arrow" /></a>
            </span>

            <span>
              <a href="https://www.peopleperhour.com/freelancer/technology-programming/vinit-kumar-full-stack-developer-ios-android-jwxzxz" target="_blank"><img src={people} alt="arrow" /></a>
            </span>
            <span>
              <a href="https://www.truelancer.com/freelancer/vinitkumar1516" target="_blank"><img src={truelancer} alt="arrow" /></a>
            </span>
            <span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@masterintechsolutions.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gmail} alt="Gmail" />
              </a>
            </span>
          </span>
        </div>
      </div>

      <div className="hero-socials hero-fade-in hero-delay-3">
        <div>
          <a
            href="https://www.linkedin.com/company/master-intech-solutions/"
            target="_blank"
            rel="noreferrer"
            className="socialmedialinks1"
          >
            LINKEDIN{" "}
            <span>
              <img src={arrowtop} alt="arrow" className="arrowtrans" />
            </span>
          </a>

          <a
            href="https://www.instagram.com/mastersintechsolutions/"
            target="_blank"
            rel="noreferrer"
            className="socialmedialinks1"
          >
            INSTAGRAM{" "}
            <span>
              <img src={arrowtop} alt="arrow" className="arrowtrans" />
            </span>
          </a>

          <a
            href="https://www.facebook.com/MasterIntechSolutions/"
            target="_blank"
            rel="noreferrer"
            className="socialmedialinks1"
          >
            FACEBOOK{" "}
            <span>
              <img src={arrowtop} alt="arrow" className="arrowtrans" />
            </span>
          </a>
        </div>

        <span className="socialmedialinks1">
          CONNECT WITH US :{" "}
          <span>
            <a href="https://www.upwork.com/freelancers/~01e7473140f1676ff9" target="_blank"><img src={upworks} alt="arrow" /></a>
          </span>

          <span>
            <a href="https://www.peopleperhour.com/freelancer/technology-programming/vinit-kumar-full-stack-developer-ios-android-jwxzxz" target="_blank"><img src={people} alt="arrow" /></a>
          </span>
          <span>
            <a href="https://www.truelancer.com/freelancer/vinitkumar1516" target="_blank"><img src={truelancer} alt="arrow" /></a>
          </span>
          <span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@masterintechsolutions.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="Gmail" />
            </a>
          </span>
        </span>
      </div>
    </section>
  );
}