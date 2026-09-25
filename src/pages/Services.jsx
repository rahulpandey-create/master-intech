import { useEffect, useState } from "react";
import { submitEnquiry } from "../services/api";
import arrowbtn from "../assets/arrowbtn.svg";
import Contact from "../components/home/Contact";

const MASTER_INTECH_WHATSAPP_LINK = "https://wa.me/919878263393";

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
        Development
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

  {
    number: "05",
    tag: "SEO • SOCIAL MEDIA • PERFORMANCE",
    title: (
      <>
        Digital
        Marketing
      </>
    ),
    description:
      "Build a stronger digital presence with data-driven marketing strategies that attract the right audience, increase visibility, and turn traffic into measurable business growth.",
    features: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Google & Meta Ads",
      "Content Marketing",
      "Lead Generation",
      "Analytics & Reporting",
    ],
    impact:
      "Increase online visibility, reach high-intent customers, generate qualified leads, and improve marketing performance with measurable campaigns.",
    icon: "ri-megaphone-line",
    label: "GROWTH",
    noRowClass: true,
  },

  {
    number: "06",
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
    reverse: true,
  },
];

// ==========================================
// SERVICE VISUAL
// ==========================================

function ServiceVisual({ icon, label }) {
  return (
    <div className="service-visual">
      <div className="service-icon-box">
        <i className={icon}></i>
      </div>

      <span className="service-icon-label">
        {label}
      </span>

      <span className="service-icon-dot service-icon-dot-1"></span>
      <span className="service-icon-dot service-icon-dot-2"></span>
      <span className="service-icon-dot service-icon-dot-3"></span>
    </div>
  );
}

// ==========================================
// SERVICE ROW
// ==========================================

function ServiceRow({ service }) {
  return (
    <article
      className={`service-row ${
        service.reverse ? "reverse" : ""
      }`}
      data-reveal
    >
      <div className="service-content">
        <div className="service-number">
          {service.number}
        </div>

        <div className="service-tag">
          {service.tag}
        </div>

        <h2>
          {service.title}
        </h2>

        <p className="service-description">
          {service.description}
        </p>

        <div className="service-features">
          {service.features.map((feature) => (
            <span key={feature}>
              {feature}
            </span>
          ))}
        </div>

        <div className="service-impact">
          <strong>
            Business Impact
          </strong>

          <p>
            {service.impact}
          </p>
        </div>
      </div>

      <ServiceVisual
        icon={service.icon}
        label={service.label}
      />
    </article>
  );
}

// ==========================================
// SERVICES PAGE
// ==========================================

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    success: "",
    error: "",
  });

  // ========================================
  // OPEN CONTACT
  // ========================================

  const openContact = (project = null) => {
    const contactProject =
      project || {
        label: "General Enquiry",
      };

    setSelectedProject(contactProject);
    setContactOpen(true);

    document.body.style.overflow = "hidden";
  };

  // ========================================
  // CLOSE CONTACT
  // ========================================

  const closeContact = () => {
    setContactOpen(false);
    setSelectedProject(null);

    document.body.style.overflow = "";
  };

  // ========================================
  // FORM
  // ========================================

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setFeedback({
      success: "",
      error: "",
    });

    try {
      const data = await submitEnquiry(formData);

      setFeedback({
        success:
          data?.message ||
          "Your enquiry has been submitted successfully.",
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFeedback({
        success: "",
        error:
          error?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ========================================
  // CLICK OUTSIDE
  // ========================================

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeContact();
    }
  };

  // ========================================
  // ESC KEY
  // ========================================

  useEffect(() => {
    if (!contactOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeContact();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [contactOpen]);

  // ========================================
  // CLEANUP
  // ========================================

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // ========================================
  // LOCAL SMOOTH SCROLL
  // ========================================

  const handleLocalLink = (event, sectionId) => {
    event.preventDefault();

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="page-enter services-page">
      {/* =====================================
          NAVIGATION
      ====================================== */}

      {/* <DesignNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      /> */}

      {/* =====================================
          HERO
      ====================================== */}

      <div className="services-hero">
        <div className="services-hero-grid"></div>

        <div className="services-glow services-glow-1"></div>

        <div className="services-glow services-glow-2"></div>

        <div className="services-container">
          {/* EYEBROW */}

          <div className="services-eyebrow">
            <span></span>
            OUR SERVICES
          </div>

          {/* HEADING */}

          <h1>
            Technology That
            Moves Your Business
            Forward
          </h1>

          {/* DESCRIPTION */}

          <p>
            From AI-powered automation to scalable software,
            digital marketing, cybersecurity, and digital
            experiences — we build technology solutions
            designed around your business.
          </p>

          {/* BUTTONS */}

          <div className="services-hero-buttons">
            {/* PRIMARY */}

            <button
              className="service-btn service-btn-primary"
              type="button"
              onClick={() => openContact()}
            >
              Let's Build Together

              <span>
                <img
                  src={arrowbtn}
                  alt="Contact Us"
                />
              </span>
            </button>

            {/* SECONDARY */}

            <a
              href="/"
              className="service-btn service-btn-outline"
              onClick={(event) =>
                handleLocalLink(
                  event,
                  "services-list"
                )
              }
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* =====================================
          SERVICES LIST
      ====================================== */}

      <div
        className="services-list"
        id="services-list"
      >
        {services.map((service) => (
          <ServiceRow
            key={service.number}
            service={service}
          />
        ))}
      </div>

      {/* =====================================
          CTA SECTION
      ====================================== */}

      <section
        className="services-cta"
        id="contact"
      >
        <div className="cta-glow"></div>

        <div className="services-container">
          <div className="cta-content">
            {/* EYEBROW */}

            <div className="services-eyebrow">
              <span></span>
              LET&apos;S WORK TOGETHER
            </div>

            {/* CTA HEADING */}

            <h2>
              Have a Technology
              <br />
              Challenge?
            </h2>

            {/* CTA DESCRIPTION */}

            <p>
              Let's turn your ideas, processes, and
              challenges into scalable digital solutions.
            </p>

            {/* CTA BUTTON */}

            <a
              href={MASTER_INTECH_WHATSAPP_LINK}
              className="service-btn service-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT POPUP
      ====================================== */}

      {contactOpen && (
        <div
          className="portfolio-contact-overlay"
          onMouseDown={handleOverlayClick}
        >
          <div
            className="portfolio-contact-modal"
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="portfolio-contact-close"
              onClick={closeContact}
              aria-label="Close contact form"
            >
              ×
            </button>

            <Contact
              formData={formData}
              loading={loading}
              feedback={feedback}
              updateField={updateField}
              handleSubmit={handleSubmit}
              selectedProject={selectedProject}
            />
          </div>
        </div>
      )}
    </section>
  );
}