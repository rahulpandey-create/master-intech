import { useEffect, useState } from "react";

import figmaLogo from "../../assets/figma.png";
import photoshopLogo from "../../assets/photoshop.png";
import wordpressLogo from "../../assets/wordpress.png";
import html5Logo from "../../assets/HTML5.png";
import tailwind from "../../assets/tailwind.png";
import shopify from "../../assets/shopify.png";
import react from "../../assets/react.png";
import laravel from "../../assets/laravel.png";

const expertise = [
  {
    src: figmaLogo,
    alt: "Figma",
    description: "UI/UX Design & Prototyping",
  },
  {
    src: photoshopLogo,
    alt: "Adobe Photoshop",
    description: "Photo Editing & Visual Design",
  },
  {
    src: wordpressLogo,
    alt: "WordPress",
    description: "Websites & CMS Development",
  },
  {
    src: html5Logo,
    alt: "HTML5",
    description: "Modern Web Structure",
  },
  {
    src: tailwind,
    alt: "Tailwind CSS",
    description: "Fast & Responsive UI Styling",
  },
  {
    src: shopify,
    alt: "Shopify",
    description: "E-commerce Website Development",
  },
  {
    src: react,
    alt: "React",
    description: "Interactive Web Experiences",
  },
  {
    src: laravel,
    alt: "Laravel",
    description: "Backend & Web Application Development",
  },
];

export default function Expertise() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 4) % expertise.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const visibleTools = [
    expertise[startIndex],
    expertise[(startIndex + 1) % expertise.length],
    expertise[(startIndex + 2) % expertise.length],
    expertise[(startIndex + 3) % expertise.length],
  ];

  return (
    <section id="services" className="expertise-strip">
      <div className="section-shell expertise-inner" data-reveal>

        <div className="expertise-copy">
          <h2>OUR EXPERTISE</h2>

          <p>
            Innovative technologies. Creative <br />
            solutions. Exceptional results.
          </p>
        </div>

        <div className="expertise-slider">

          <div className="expertise-tools">
            {visibleTools.map((item) => (
              <div className="tool-logo" key={item.alt}>

                <img src={item.src} alt={item.alt} />

                <div className="expertise-tooltip">
                  <strong>{item.alt}</strong>
                  <span>{item.description}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}