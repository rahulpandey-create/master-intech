import "./Hero.css";
import logo from "../assets/MasterIntechlogo.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <nav className="hero-nav">
        <div className="nav-links">
          <a href="#hero">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
        </div>

        <div className="nav-logo">
          <img src={logo} alt="MasterIntech Logo" />
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

      <div className="hero-content">
        <p className="hero-label">WE ARE MASTER INTECH</p>

        <h1>
          WE BUILD
          <br />
          DIGITAL
          <br />
          EXPERIENCES
        </h1>

        <p className="hero-description">
          We create modern digital solutions that help businesses grow,
          connect and stand out.
        </p>

        <a href="#contact" className="hero-button">
          LET'S TALK
        </a>
      </div>
    </section>
  );
}

export default Hero;