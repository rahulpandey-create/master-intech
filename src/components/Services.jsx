import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      description:
        "Modern, scalable websites and web applications built around your business goals.",
    },
    {
      number: "02",
      title: "UI / UX DESIGN",
      description:
        "Clean and intuitive digital experiences designed to connect with your users.",
    },
    {
      number: "03",
      title: "MOBILE DEVELOPMENT",
      description:
        "Reliable mobile experiences built for today's devices and users.",
    },
    {
      number: "04",
      title: "DIGITAL SOLUTIONS",
      description:
        "Technology solutions that streamline processes and help your business grow.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-heading">
        <p className="section-label">WHAT WE DO</p>

        <h2>
          OUR
          <br />
          <span>SERVICES</span>
        </h2>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <div className="service-item" key={service.number}>
            <span className="service-number">{service.number}</span>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <span className="service-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;