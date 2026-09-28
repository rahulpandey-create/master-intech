import Breadcrumbs from "../../components/Breadcrumbs";
import "./servicePages.css";

export default function ServiceDetailPage({ service }) {
  return (
    <main className="service-page">
      <Breadcrumbs />

      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
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

        <a href="/#contact" className="service-cta-button">
          Let's Talk
        </a>
      </section>
    </main>
  );
}