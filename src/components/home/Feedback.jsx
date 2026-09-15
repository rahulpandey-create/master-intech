import abstractRight from "../../assets/design/10.png";
import client2 from "../../assets/design/12.png";
import client3 from "../../assets/design/13.png";
import client4 from "../../assets/design/14.png";
import client5 from "../../assets/design/15.png";
import client6 from "../../assets/design/16.png";
import google from "../../assets/google.svg";

export default function Feedback() {
  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="feedback-section">
      <div className="section-shell feedback-grid">
        <div className="floating-people" data-reveal>
          <img src={client2} alt="" className="bord1" />
          <img src={client3} alt="" className="bord2" />
          <img src={client4} alt="" className="bord3" />
          <img src={client5} alt="" className="bord4" />
          <img src={client6} alt="" className="bord5" />
        </div>

        <div className="testimonial-photo" data-reveal>
          <img src={client6} alt="Client portrait" />
          <div>
            <strong>BERNIE LEIGH</strong>
            <span>Director, Luxor</span>
          </div>
        </div>

        <div className="testimonial-copy" data-reveal>
          <h2>CLIENT&apos;S <br />FEEDBACK</h2>

          <p>
            Real feedback from businesses we&apos;ve<br />
            helped through thoughtful design,<br />
            development, and reliable support.
          </p>

          <a
            className="review-button"
            href={window.location.pathname}
            onClick={(event) => handleSectionLink(event, "contact")}
          >
            <span>
              <img src={google} alt=""></img>
            </span>
            See All Reviews
          </a>
        </div>

        <img
          className="feedback-art"
          src={abstractRight}
          alt="Abstract colorful 3D artwork"
        />
      </div>
    </section>
  );
}