import { useState } from "react";


const platforms = [
  {
    name: "Upwork",
    image: "../assets/upwork.jpg",
  },
  {
    name: "Upwork",
    image: "../assets/upwork.jpg",
  },
  {
    name: "Upwork",
    image: "../assets/upwork.jpg",
  },
  {
    name: "Upwork",
    image: "../assets/upwork.jpg",
  },
];



export default function PlatformSwiper() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % platforms.length);
  };

  const prevSlide = () => {
    setActive(
      (prev) => (prev - 1 + platforms.length) % platforms.length
    );
  };

  return (
    <section className="platform-swiper">
      <div className="platform-content">
        <div className="platform-info">
          <span>PLATFORM</span>
          <h2>{platforms[active].name}</h2>

          <div className="platform-buttons">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>

        <div className="platform-image">
          <img
            key={platforms[active].image}
            src={platforms[active].image}
            alt={platforms[active].name}
          />
        </div>
      </div>

      <div className="platform-dots">
        {platforms.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}