import { useEffect, useRef, useState } from "react";

import abstractLeft from "../../assets/design/9.png";
import clientsmile from "../../assets/clientsmile.png";
import clientsmile1 from "../../assets/clientsmile1.png";
import client3 from "../../assets/design/13.png";
import plus from "../../assets/plus.svg";
import thumb from "../../assets/thumb.svg";


// Counter Component
function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  // Start counter when it comes into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  // Counter animation
  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <strong ref={counterRef}>
      {count}
      {suffix}
    </strong>
  );
}


export default function Award() {
  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="projects" className="award-section">
      <div className="uniqheadingflex">
        <div>
          
        </div>
        <div>
          <h2 className="uniqeheading container">
            AWARD-WINNING MANCHESTER WEB DESIGN <br></br>& BRANDING AGENCY SINCE 2008.
          </h2>
        </div>
     
      </div>

      <div className="section-shell award-grid">

        {/* Left Image */}
        <div className="award-art" data-reveal>
          <img
            src={abstractLeft}
            alt="Abstract colorful 3D artwork"
          />
        </div>

  
        {/* Right Content */}
        <div className="award-copy" data-reveal>

          <h2>
            AWARD-WINNING MANCHESTER WEB DESIGN BRANDING AGENCY SINCE 2008.
          </h2>


          {/* Client Avatars */}
          <div className="avatars">

            <img
              src={clientsmile}
              alt=""
            />

            <img
              src={clientsmile1}
              alt=""
            />

            <img
              src={client3}
              alt=""
            />

            <img
              src={plus}
              className="bg-black plusimg"
              alt=""
            />

          </div>


          {/* Description */}
          <p>
            Driven by innovation, we deliver cutting-edge
            
            IT solutions that empower businesses to grow.
          </p>


          {/* Stats / Counters */}
          <div className="stats">

            {/* 50K+ */}
            <div>
              <Counter
                end={50}
                suffix="K+"
                duration={2000}
              />

              <span>
                Clients Satisfied and
                <br />
                Repeating
              </span>
            </div>


            {/* 500K+ */}
            <div>
              <Counter
                end={500}
                suffix="K+"
                duration={2000}
              />

              <span>
                Projects Completed in 24
                <br />
                Countries
              </span>
            </div>

          </div>


          {/* CTA Button */}
          <a
            className="outline-button hero-pill"
            href={window.location.pathname}
            onClick={(event) => handleSectionLink(event, "contact")}
          >
            <span>
              <img
                src={thumb}
                className="bg-black plusimg"
                alt=""
              />
            </span>

            Let's Discuss Your Idea
          </a>

        </div>
      </div>

    </section>
  );
}