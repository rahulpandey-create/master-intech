import abstractRight from "../../assets/design/10.png";
import client2 from "../../assets/design/12.png";
import client3 from "../../assets/design/13.png";
import client4 from "../../assets/design/14.png";
import client5 from "../../assets/design/15.png";
import client6 from "../../assets/design/16.png";

export default function Feedback() {
  return (
<section className="feedback-section">
  <div className="section-shell feedback-grid">
    <div className="floating-people" data-reveal>
      <img src={client2} alt="" />
      <img src={client3} alt="" />
      <img src={client4} alt="" />
      <img src={client5} alt="" />
      <img src={client6} alt="" />
    </div>

    <div className="testimonial-photo" data-reveal>
      <img src={client6} alt="Client portrait" />
      <div><strong>BERNIE LEIGH</strong><span>Director, Luxor</span></div>
    </div>

    <div className="testimonial-copy" data-reveal>
      <h2>CLIENT&apos;S<br />FEEDBACK</h2>
      <p>Real feedback from businesses we&apos;ve<br />helped through thoughtful design,<br />development, and reliable support.</p>
      <a className="review-button" href="#contact">G &nbsp; See All Reviews</a>
    </div>

    <img className="feedback-art" src={abstractRight} alt="Abstract colorful 3D artwork" />
  </div>
</section>

  );
}