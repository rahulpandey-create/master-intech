import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export default function ServiceDetailPage({ service }) {
  const whatsappMessage = `Hi, I came across Master Intech Solutions and I'm interested in ${service.title}. I'd like to discuss my project and understand how you can help.`;

  const whatsappUrl = `https://wa.me/919878263393?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="service-page">

      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">

          <Breadcrumbs />

          <span className="service-tag">{service.tag}</span>

          <h1 className="service-title">{service.title}</h1>

          <p className="service-description">{service.description}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="service-overview">
        <div className="service-section-label">OVERVIEW</div>

        <div className="service-overview-content">
          <h2>{service.overviewTitle}</h2>

          <p>{service.overview}</p>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="service-section-label">WHAT WE OFFER</div>

        <div className="service-features-grid">
          {service.features.map((feature, index) => (
            <article className="service-feature-card" key={index}>
              <span className="service-feature-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="service-impact">
        <div className="service-section-label">IMPACT</div>

        <p>{service.impact}</p>
      </section>

      {/* Process */}
      <section className="service-process">
        <div className="service-section-label">OUR PROCESS</div>

        <div className="service-process-grid">
          {service.process.map((step, index) => (
            <article className="service-process-card" key={index}>
              <span className="service-process-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Let's Build Something Together</h2>

        <p>
          Have a project in mind? Let's discuss how we can build a solution
          around your business.
        </p>

        {/* External WhatsApp link - keep as <a> */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="service-cta-button"
        >
          Let's Talk
        </a>

        <div className="service-cta-links">

          {/* Internal React Router navigation */}
          <Link
            to="/services"
            className="service-cta-link service-cta-back"
          >
            ← Back to Services
          </Link>

          {/* Internal React Router navigation */}
          <Link
            to="/portfolio"
            className="service-cta-link service-cta-portfolio"
          >
            View Portfolio →
          </Link>

        </div>
      </section>
    </main>
  );
}