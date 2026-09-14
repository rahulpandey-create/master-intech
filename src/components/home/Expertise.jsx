import figmaLogo from "../../assets/figma.png";
import photoshopLogo from "../../assets/photoshop.png";
import wordpressLogo from "../../assets/wordpress.png";
import html5Logo from "../../assets/HTML5.png";

const expertise = [
  { src: figmaLogo, alt: "Figma" },
  { src: photoshopLogo, alt: "Adobe Photoshop" },
  { src: wordpressLogo, alt: "WordPress" },
  { src: html5Logo, alt: "HTML5" },
];

export default function Expertise() {
  return (
<section id="services" className="expertise-strip">
  <div className="section-shell expertise-inner" data-reveal>
    <div className="expertise-copy">
      <h2>OUR EXPERTISE</h2>
      <p>Innovative technologies. Creative <br></br>solutions. Exceptional results.</p>
    </div>
    <div className="expertise-tools">
      {expertise.map((item) => (
        <div className="tool-logo" key={item.alt}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  </div>
</section>

  );
}