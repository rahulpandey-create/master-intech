import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-top">
        <p className="section-label">ABOUT US</p>

        <h2>
          WE TURN
          <br />
          <span>IDEAS</span> INTO
          <br />
          DIGITAL
          <br />
          REALITY.
        </h2>
      </div>

      <div className="about-bottom">
        <p className="about-description">
          Master Intech is a digital solutions company focused on building
          meaningful digital experiences, products and technology that help
          businesses move forward.
        </p>

        <a href="#contact" className="about-button">
          MORE ABOUT US
        </a>
      </div>
    </section>
  );
}

export default About;