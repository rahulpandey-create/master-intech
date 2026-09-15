import abstractLeft from "../../assets/design/9.png";
import client1 from "../../assets/design/11.png";
import client2 from "../../assets/design/12.png";
import client3 from "../../assets/design/13.png";
import client4 from "../../assets/design/14.png";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Award() {
  return (
    <section id="projects" className="award-section">
      <div className="section-shell award-grid">
        <div className="award-art" data-reveal>
          <img src={abstractLeft} alt="Abstract colorful 3D artwork" />
        </div>

        <div className="award-copy" data-reveal>
          <h2>
            AWARD-WINNING MANCHESTER WEB DESIGN
            <br className="award-break" /> &amp; BRANDING AGENCY SINCE 2008.
          </h2>

          <div className="avatars">
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
            <img src={client4} alt="" />
            <b>+</b>
          </div>

          <p>
            Driven by innovation, we deliver cutting-edge
            <br />
            IT solutions that empower businesses to grow.
          </p>

          <div className="stats">
            <div>
              <strong>50K+</strong>
              <span>
                Clients Satisfied and
                <br />
                Repeating
              </span>
            </div>

            <div>
              <strong>500K+</strong>
              <span>
                Projects Completed in 24
                <br />
                Countries
              </span>
            </div>
          </div>

          <a
            className="outline-button"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
          >
            ♧ &nbsp; Let&apos;s Discuss Your Idea
          </a>
        </div>
      </div>
    </section>
  );
}