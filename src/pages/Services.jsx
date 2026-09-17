import { useState } from "react";
import arrowbtn from "../assets/arrowbtn.svg";
import DesignNav from "../components/home/designNav";

const services = [
  {
    number: "01",
    tag: "AI • AUTOMATION • AGENTS",
    title: (
      <>
        AI & Intelligent
        Automation
      </>
    ),
    description:
      "Build AI-powered workflows, intelligent assistants, automation systems, and agentic solutions that reduce repetitive work and accelerate decision-making.",
    features: [
      "AI Strategy & Consulting",
      "AI Agents",
      "Business Automation",
      "Generative AI",
      "AI Integrations",
      "Data & Insights",
    ],
    impact:
      "Automate repetitive operations, reduce manual effort, and help teams make faster, data-driven decisions.",
    icon: "ri-ai-generate-2",
    label: "INTELLIGENCE",
    reverse: false,
  },
  {
    number: "02",
    tag: "PORTALS • DASHBOARDS • BUSINESS SYSTEMS",
    title: (
      <>
        Custom Portal
        Development
      </>
    ),
    description:
      "Build secure, scalable custom portals designed to connect teams, customers, partners, and business operations through one seamless digital platform.",
    features: [
      "Customer Portals",
      "Partner Portals",
      "Employee Portals",
      "Admin Dashboards",
      "Self-Service Platforms",
      "Role-Based Access",
    ],
    impact:
      "Replace disconnected tools with software that fits the way your business actually works.",
    icon: "ri-code-s-slash-line",
    label: "ENGINEERING",
    reverse: true,
  },
  {
    number: "03",
    tag: "WEB • APPS • DIGITAL",
    title: (
      <>
        Web & Application
        <span> Development</span>
      </>
    ),
    description:
      "Create high-performance websites and web applications that deliver seamless experiences across every device.",
    features: [
      "Corporate Websites",
      "Web Applications",
      "E-Commerce",
      "Frontend & Backend",
      "Progressive Web Apps",
      "Performance Optimization",
    ],
    impact:
      "Build faster, responsive digital platforms that improve usability, engagement, and conversions.",
    icon: "ri-global-line",
    label: "DIGITAL",
    reverse: false,
  },
  {
    number: "04",
    tag: "CLOUD • DEVOPS • INFRASTRUCTURE",
    title: (
      <>
        Cloud &
        DevOps
      </>
    ),
    description:
      "Modernize infrastructure, optimize cloud environments, and build reliable deployment pipelines for faster and more resilient operations.",
    features: [
      "Cloud Migration",
      "Cloud Architecture",
      "AWS / Azure / GCP",
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "Monitoring",
    ],
    impact:
      "Improve scalability, deployment speed, reliability, and infrastructure efficiency.",
    icon: "ri-cloud-line",
    label: "INFRASTRUCTURE",
    reverse: true,
  },
  {
    number: "05",
    tag: "SECURITY • RISK • PROTECTION",
    title: (
      <>
        Cyber
        Security
      </>
    ),
    description:
      "Strengthen your digital environment with security-focused architecture, monitoring, risk management, and proactive protection.",
    features: [
      "Security Assessment",
      "Vulnerability Management",
      "Application Security",
      "Network Security",
      "Identity & Access",
      "Risk & Compliance",
    ],
    impact:
      "Identify vulnerabilities earlier, protect critical systems, and build security into your technology foundation.",
    icon: "ri-shield-check-line",
    label: "PROTECTION",
    reverse: false,
  },
  {
    number: "06",
    tag: "UX • UI • PRODUCT",
    title: (
      <>
        UI/UX &
        Product Design
      </>
    ),
    description:
      "Turn complex products into intuitive digital experiences through research-driven UX and modern interface design.",
    features: [
      "UX Research",
      "User Journey Mapping",
      "Wireframing",
      "UI Design",
      "Design Systems",
      "Prototyping",
    ],
    impact:
      "Create simple, intuitive products that improve usability, engagement, and customer satisfaction.",
    icon: "ri-pantone-line",
    label: "EXPERIENCE",
    reverse: true,
  },
];

function ServiceVisual({ icon, label }) {
  return (
    <div className="service-visual">
      <div className="service-icon-box">
        <i className={icon}></i>
      </div>

      <span className="service-icon-label">{label}</span>

      <span className="service-icon-dot service-icon-dot-1"></span>
      <span className="service-icon-dot service-icon-dot-2"></span>
      <span className="service-icon-dot service-icon-dot-3"></span>
    </div>
  );
}

function ServiceRow({ service }) {
  return (
    <article className={`service-row ${service.reverse ? "reverse" : ""}`}>
      <div className="service-content">
        <div className="service-number">{service.number}</div>

        <div className="service-tag">{service.tag}</div>

        <h2>{service.title}</h2>

        <p className="service-description">{service.description}</p>

        <div className="service-features">
          {service.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <div className="service-impact">
          <strong>Business Impact</strong>

          <p>{service.impact}</p>
        </div>
      </div>

      <ServiceVisual
        icon={service.icon}
        label={service.label}
      />
    </article>
  );
}

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLocalLink = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="services-page">
      <DesignNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* HERO */}
      <div className="services-hero">
        <div className="services-hero-grid"></div>

        <div className="services-glow services-glow-1"></div>
        <div className="services-glow services-glow-2"></div>

        <div className="services-container">
          <div className="services-eyebrow">
            <span></span>
            OUR SERVICES
          </div>

          <h1>
            Technology That
            Moves Your Business
            Forward
          </h1>

          <p>
            From AI-powered automation to scalable software, cloud
            infrastructure, cybersecurity, and digital experiences — we build
            technology solutions designed around your business.
          </p>

          <div className="services-hero-buttons">
            <a
              href="/"
              className="service-btn service-btn-primary"
              onClick={(event) => handleLocalLink(event, "contact")}
            >
              Let's Build Together
              <span>
                <img src={arrowbtn} alt="" />
              </span>
            </a>

            <a
              href="/"
              className="service-btn service-btn-outline"
              onClick={(event) =>
                handleLocalLink(event, "services-list")
              }
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-list" id="services-list">
        {services.map((service) => (
          <ServiceRow
            key={service.number}
            service={service}
          />
        ))}
      </div>

      {/* CTA */}
      <section className="services-cta" id="contact">
        <div className="cta-glow"></div>

        <div className="services-container">
          <div className="cta-content">
            <div className="services-eyebrow">
              <span></span>
              LET&apos;S WORK TOGETHER
            </div>

            <h2>
              Have a Technology
              Challenge?
            </h2>

            <p>
              Let's turn your ideas, processes, and challenges into scalable
              digital solutions.
            </p>

            <a
              href="/"
              className="service-btn service-btn-primary"
              onClick={(event) => handleLocalLink(event, "contact")}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}