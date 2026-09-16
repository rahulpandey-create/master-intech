import aboutImage from "../../assets/codrr.gif";
import google from "../../assets/google.svg";
import trust from "../../assets/trust.svg";

export default function About() {
  return (
<section id="about" className="about-design">
  <div className="section-shell about-grid">
    <div className="about-wordmark" data-reveal>
      <div className="word-carousel" aria-label="Design, Development, Branding, Photoshop">
        <div className="word-track">
          <div>DEVELOPMENT</div>
          <div>BRANDING</div>
          <div>DESIGN</div>
          <div>DEVELOPMENT</div>
          <div>BRANDING</div>
          <div>DESIGN</div>
        </div>
      </div>
      <div className="ratings">
        <div className="ratingflex">
           <img src={google} alt=""></img>
           4.5 RATINGS
        </div>
        <div className="ratingflex">
           <img src={trust} alt=""></img>
           5 RATINGS
        </div>
        </div>
    </div>

    <div className="about-intro" data-reveal>
      <p className="eyebrow">ABOUT ME</p>
      <h2>WHAT WE DO</h2>
      <p>Creative solutions. Digital experiences.
<br></br>Designed to make an impact.</p>
      <img src={aboutImage} alt="Developer working at a computer" />
    </div>
  </div>
</section>


  );
}