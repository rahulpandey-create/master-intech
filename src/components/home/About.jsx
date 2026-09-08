import aboutImage from "../../assets/design/2.png";

export default function About() {
  return (
<section id="about" className="about-design">
  <div className="section-shell about-grid">
    <div className="about-wordmark" data-reveal>
      <div className="word-carousel" aria-label="Design, Development, Branding">
        <div className="word-track">
          <div>DEVELOPMENT</div>
          <div>BRANDING</div>
          <div>DESIGN</div>
          <div>DEVELOPMENT</div>
          <div>BRANDING</div>
          <div>DESIGN</div>
        </div>
      </div>
      <div className="ratings"><span>G</span> 4.5 RATINGS &nbsp;&nbsp; ★ 5 RATINGS</div>
    </div>

    <div className="about-intro" data-reveal>
      <p className="eyebrow">ABOUT ME</p>
      <h2>WHAT WE DO</h2>
      <p>Innovative technologies. Creative solutions.<br />Exceptional results.</p>
      <img src={aboutImage} alt="Developer working at a computer" />
    </div>
  </div>
</section>

  );
}