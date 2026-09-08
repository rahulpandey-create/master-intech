import recommendMe from "../../assets/design/17.png";
import kollex from "../../assets/design/18.png";
import celquence from "../../assets/design/19.png";
import workStudy from "../../assets/design/20.png";
import smartbol from "../../assets/design/21.png";
import enigmaNova from "../../assets/design/22.png";
import chamundi from "../../assets/design/23.png";
import infraOptics from "../../assets/design/24.png";
import kyros from "../../assets/design/25.png";
import designBrand1 from "../../assets/design/8.png";
import designBrand2 from "../../assets/design/7.png";
import designBrand3 from "../../assets/design/6.png";

const brands = [
  { src: designBrand1, alt: "Jacaranda" }, { src: recommendMe, alt: "RecommendMe" },
  { src: designBrand2, alt: "Ellebelme" }, { src: designBrand3, alt: "Medi Sync" },
  { src: kollex, alt: "Kollex" }, { src: chamundi, alt: "Chamundi" },
  { src: smartbol, alt: "Smartbol" }, { src: workStudy, alt: "Work & Study" },
  { src: enigmaNova, alt: "Enigma Nova" }, { src: celquence, alt: "Celquence" },
  { src: infraOptics, alt: "Infra Optics" }, { src: kyros, alt: "Kyros Infra" },
];

export default function Brands() {
  return (
<section className="brands-section">
  <div className="section-shell" data-reveal>
    <div className="center-heading">
      <h2>TRUSTED BY TOP BRANDS</h2>
      <p>Empowering businesses with trusted<br />digital solutions</p>
    </div>
    <div className="brand-grid">
      {brands.map((brand) => (
        <div key={brand.alt}><img src={brand.src} alt={brand.alt} /></div>
      ))}
    </div>
  </div>
</section>

  );
}