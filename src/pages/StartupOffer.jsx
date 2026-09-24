import { useEffect, useMemo, useState } from "react";
import { submitEnquiry } from "../services/api";
import { useNavigate } from "react-router-dom";
import arrowbtn from "../assets/arrowbtn.svg";
import arrowhitee from "../assets/arrowhitee.svg";
import "../main.css";

const SERVICE_OPTIONS = [
  "Website",
  "E-commerce / Shopify",
  "Logo & Branding",
  "SEO",
  "Google Ads",
  "Social Media Marketing",
  "AI Automation",
  "Other",
];

const BUSINESS_STAGES = [
  "Idea stage",
  "Preparing to launch",
  "Recently launched",
  "Existing business",
  "Looking to expand",
];

const LAUNCH_TIMELINES = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just researching",
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000+",
  "Not sure",
];

const PACKAGES = [
  {
    number: "01",
    name: "ESSENTIAL",
    title: "A focused digital foundation for getting started.",
    detail: "A practical starting point built around the core services your business needs first.",
  },
  {
    number: "02",
    name: "GROWTH",
    title: "A broader combination of digital presence, branding and growth services.",
    detail: "Designed for businesses that need more than a website to establish and grow their presence.",
  },
  {
    number: "03",
    name: "COMPLETE",
    title: "A more comprehensive launch solution combining digital presence, branding, marketing and automation.",
    detail: "A wider launch foundation for businesses that want multiple capabilities working together.",
  },
];

const FAQS = [
  [
    "Who is eligible for the Startup Launch Program?",
    "The program is designed for newly launched businesses, early-stage startups and businesses preparing to launch. Existing small businesses can also apply when they are looking to strengthen their digital presence or automate repetitive processes. Terms and eligibility apply.",
  ],
  [
    "Do I need to have already launched my business?",
    "No. You can apply at the idea stage, while preparing to launch, or after launch. The qualification form helps the team understand where your business currently stands.",
  ],
  [
    "What services can I combine under the Startup Launch Program?",
    "You can request a combination of website development, e-commerce/Shopify, branding, SEO, Google Ads, social media marketing and AI automation. Select the areas relevant to your goals in the form.",
  ],
  [
    "Do I need to know exactly what services I need before applying?",
    "No. Tell the team about your business, goals and current stage. Master Intech can use that information to recommend a suitable combination of website, branding, marketing and automation services.",
  ],
  [
    "Is startup pricing publicly listed?",
    "No. This page does not publish package prices or fixed startup rates. Pricing depends on your requirements and the services selected.",
  ],
  [
    "How is my startup package determined?",
    "The submitted requirements are reviewed to understand the scope, business stage and requested services. The team can then discuss an appropriate solution and startup pricing with you.",
  ],
  [
    "Can an existing small business apply?",
    "Yes. Existing businesses can apply if they are looking to improve their digital presence, add branding or marketing support, or automate repetitive business processes.",
  ],
  [
    "Can I request only a website or do I need multiple services?",
    "You can request only the service you need. The program can also be structured around a combination of services where that better fits your goals.",
  ],
  [
    "Can you help with both branding and website development?",
    "Yes. Branding and website development are both included service areas, so they can be considered together as part of your startup solution.",
  ],
  [
    "Can Master Intech help automate business processes?",
    "Yes. The AI & Automation service area includes AI chatbot or lead capture, form automation, email notifications and basic business workflow automation.",
  ],
  [
    "What happens after I submit the form?",
    "Master Intech reviews the requirements you submitted, determines an appropriate combination of services, and discusses the project and startup pricing with you.",
  ],
  [
    "How soon will someone contact me?",
    "The team will review the submitted enquiry and contact you using the details provided. The exact response time can vary, so the program does not promise a fixed contact timeframe.",
  ],
];

const initialForm = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  stage: "",
  services: [],
  otherService: "",
  launchTimeline: "",
  budget: "",
  description: "",
};

function StartupOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  
  // NEW: State to track how many FAQs are currently visible
  const [visibleFaqsCount, setVisibleFaqsCount] = useState(4);
  
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ error: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const nodes = document.querySelectorAll(".startup-offer-page [data-startup-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const selectedServicesLabel = useMemo(
    () => formData.services.join(", "),
    [formData.services]
  );

  const openModal = () => {
    setFeedback({ error: "" });
    setErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (loading) return;
    setIsModalOpen(false);
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const toggleService = (service) => {
    setFormData((current) => {
      const exists = current.services.includes(service);
      const services = exists
        ? current.services.filter((item) => item !== service)
        : [...current.services, service];

      return { ...current, services };
    });
    setErrors((current) => ({ ...current, services: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedBusinessName = formData.businessName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedDescription = formData.description.trim();

    if (!trimmedName) nextErrors.name = "Please enter your name.";
    else if (trimmedName.length < 2) nextErrors.name = "Name must be at least 2 characters.";

    if (!trimmedBusinessName) nextErrors.businessName = "Please enter your business or startup name.";

    if (!trimmedEmail) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) nextErrors.email = "Please enter a valid email address.";

    if (!trimmedPhone) nextErrors.phone = "Please enter a phone or WhatsApp number.";
    else if (!/^[+\d][\d\s().-]{7,24}$/.test(trimmedPhone)) nextErrors.phone = "Please enter a valid phone or WhatsApp number.";

    if (!formData.stage) nextErrors.stage = "Please select your business stage.";
    if (!formData.services.length) nextErrors.services = "Select at least one service you need.";
    if (formData.services.includes("Other") && !formData.otherService.trim()) {
      nextErrors.otherService = "Please tell us what you need.";
    }
    if (!formData.launchTimeline) nextErrors.launchTimeline = "Please select a launch timeline.";
    if (!formData.budget) nextErrors.budget = "Please select an estimated budget.";
    if (!trimmedDescription) nextErrors.description = "Please tell us briefly about your business.";
    else if (trimmedDescription.length < 10) nextErrors.description = "Please add a little more detail (at least 10 characters).";

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback({ error: "" });

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);

    const message = [
      "STARTUP LAUNCH PROGRAM APPLICATION",
      "",
      `Business / Startup: ${formData.businessName.trim()}`,
      `Phone / WhatsApp: ${formData.phone.trim()}`,
      `Business stage: ${formData.stage}`,
      `Services requested: ${selectedServicesLabel}${formData.services.includes("Other") ? ` — ${formData.otherService.trim()}` : ""}`,
      `Launch timeline: ${formData.launchTimeline}`,
      `Estimated budget: ${formData.budget}`,
      "",
      "Business description:",
      formData.description.trim(),
    ].join("\n");

    try {
      await submitEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message,
      });

      navigate("/thank-you/");
    } catch (error) {
      setFeedback({ error: error.message || "We could not submit your enquiry. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="startup-offer-page">
      <section className="startup-offer-hero">
        <div className="startup-offer-hero-grid" aria-hidden="true" />
        <div className="services-glow services-glow-1" aria-hidden="true" />
        <div className="services-glow services-glow-2" aria-hidden="true" />

        <div className="startup-offer-container startup-offer-hero-content">
          <div className="startup-offer-eyebrow" data-startup-reveal>
            <span className="startup-offer-eyebrow-line" />
            STARTUP LAUNCH PROGRAM
            <span className="startup-offer-eyebrow-line" />
          </div>

          
          <div class="tech-line"><span>BUILD</span><i>•</i><span>BRAND</span><i>•</i><span>LAUNCH</span><i>•</i><span>GROW</span></div>

          <h1 data-startup-reveal>
            Start Your Business Online <br></br><span className="quoteline">"Without the Big Upfront Cost"</span>
          </h1>

          <p className="startup-offer-hero-copy" data-startup-reveal>
            Starting a new business? Master Intech Solutions is offering special startup packages designed to help new businesses establish a professional online presence without stretching their initial budget.
          </p>

          <div className="startup-offer-hero-actions" data-startup-reveal>
            <button type="button" className="startup-offer-primary-button" onClick={openModal}>
              Apply for Startup Pricing
              <img src={arrowbtn} alt="" aria-hidden="true" />
            </button>
          </div>

          <p className="startup-offer-eligibility-note" data-startup-reveal>
            Available for new businesses and early-stage startups. Terms &amp; eligibility apply.
          </p>
        </div>
      </section>

      <section className="startup-offer-section startup-offer-intro">
        <div className="startup-offer-container startup-offer-intro-grid" data-startup-reveal>
          <div>
            <p className="startup-offer-section-label">01 / THE LAUNCH FOUNDATION</p>
            <h2>Everything You Need to Launch Your Business</h2>
          </div>
          <div>
            <p className="startup-offer-section-copy">
              Instead of treating your first website as a standalone project, the Startup Launch Program brings together the digital building blocks a new business may need — from its website and brand identity to marketing foundations and basic automation.
            </p>
            <p className="startup-offer-section-copy muted">
              Choose the areas that matter to you. Your final startup solution is shaped around your requirements rather than a public fixed-price package.
            </p>
          </div>
        </div>
      </section>

      <section className="startup-offer-section startup-offer-services-section">
        <div className="startup-offer-container">
          <div className="startup-offer-section-heading" data-startup-reveal>
            <p className="startup-offer-section-label">02 / CORE SERVICES</p>
            <h2>Build the pieces that make your business ready.</h2>
          </div>

          <div className="startup-offer-service-grid">
            <ServiceCard
              number="01"
              title="Website Development"
              intro="A professional digital home for your business from day one."
              items={[
                "Professional WordPress website",
                "Mobile responsive design",
                "Contact/enquiry forms",
                "Basic SEO setup",
                "Google Analytics / Search Console setup",
              ]}
            />
            <ServiceCard
              number="02"
              title="Branding"
              intro="Create a consistent identity that gives your new business a professional presence."
              items={[
                "Logo design",
                "Business card",
                "Letterhead",
                "Social media profile graphics",
              ]}
            />
            <ServiceCard
              number="03"
              title="Digital Marketing"
              intro="Put the right foundations in place to make your business easier to discover."
              items={[
                "Google Business Profile setup",
                "Basic SEO",
                "Social media setup",
                "Marketing consultation",
              ]}
            />
            <ServiceCard
              number="04"
              title="AI & Automation"
              intro="Reduce repetitive work with practical automation built around everyday business processes."
              items={[
                "AI chatbot / lead capture",
                "Form automation",
                "Email notifications",
                "Basic business workflow automation",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="startup-offer-custom-cta">
        <div className="startup-offer-container startup-offer-custom-inner" data-startup-reveal>
          <div>
            <p className="startup-offer-section-label">03 / CUSTOM STARTUP SOLUTION</p>
            <h2>Tell us about your startup and we&apos;ll create a customised startup package for you.</h2>
          </div>
          <button type="button" className="startup-offer-outline-button" onClick={openModal}>
            Get Startup Pricing
            <span aria-hidden="true"><img src={arrowhitee} alt=""/></span>
          </button>
        </div>
      </section>

      <section className="startup-offer-section startup-offer-packages-section">
        <div className="startup-offer-container">
          <div className="startup-offer-section-heading" data-startup-reveal>
            <p className="startup-offer-section-label">04 / STARTUP PACKAGE STRUCTURE</p>
            <h2>One launch program. Different levels of support.</h2>
            <p className="startup-offer-section-copy">
              Essential, Growth and Complete are ways to communicate the level of support you may need. They are not fixed-price plans, and there is no public package pricing on this page.
            </p>
          </div>

          <div className="startup-offer-package-grid">
            {PACKAGES.map((pkg) => (
              <article className="startup-offer-package-card" key={pkg.name} data-startup-reveal>
                <div className="startup-offer-package-top">
                  <span>{pkg.number}</span>
                  <span>STARTUP LEVEL</span>
                </div>
                <h3>{pkg.name}</h3>
                <p className="startup-offer-package-title">{pkg.title}</p>
                <p>{pkg.detail}</p>
                <div className="startup-offer-package-line" />
                <span className="startup-offer-package-note">Customised to your requirements</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="startup-offer-section startup-offer-eligibility-section">
        <div className="startup-offer-container startup-offer-eligibility-grid">
          <div data-startup-reveal>
            <p className="startup-offer-section-label">05 / SELF-QUALIFICATION</p>
            <h2>Who Is This Offer For?</h2>
            <p className="startup-offer-section-copy">
              This offer is designed for businesses that are building, launching, or strengthening their digital foundation.
            </p>
          </div>

          <div className="startup-offer-checklist" data-startup-reveal>
            {[
              "Newly launched businesses",
              "Businesses launching within the next 3–6 months",
              "Early-stage startups",
              "Entrepreneurs building their first website",
              "Small businesses looking for branding + digital presence",
              "Businesses looking to automate repetitive processes",
            ].map((item) => (
              <div className="startup-offer-check-item" key={item}>
                <span aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="startup-offer-not-sure">
        <div className="startup-offer-container startup-offer-not-sure-inner" data-startup-reveal>
          <div>
            <p className="startup-offer-section-label">06 / NEED A RECOMMENDATION?</p>
            <h2>Not sure what you need?</h2>
            <p>
              Tell us about your business. We&apos;ll recommend the right combination of website, branding, marketing and automation services based on your goals and budget.
            </p>
          </div>
          <button type="button" className="startup-offer-primary-button" onClick={openModal}>
            Get Startup Pricing
            <img src={arrowbtn} alt="" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="startup-offer-section startup-offer-faq-section">
        <div className="startup-offer-container startup-offer-faq-layout">
          <div className="startup-offer-faq-intro" data-startup-reveal>
            <p className="startup-offer-section-label">07 / FREQUENTLY ASKED QUESTIONS</p>
            <h2>Before you apply.</h2>
            <p className="startup-offer-section-copy">
              A few practical answers to help you understand how the Startup Launch Program works before sharing your requirements.
            </p>
          </div>

          {/* UPDATED: Added logic to slice FAQS array based on state */}
          <div className="startup-offer-faq-list" data-startup-reveal>
            {FAQS.slice(0, visibleFaqsCount).map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`startup-offer-faq ${isOpen ? "is-open" : ""}`} key={question}>
                  <button
                    type="button"
                    className="startup-offer-faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`startup-faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{question}</span>
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    id={`startup-faq-answer-${index}`}
                    className="startup-offer-faq-answer"
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NEW: Load More Button */}
          {visibleFaqsCount < FAQS.length && (
            <div 
              style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem" }} 
              data-startup-reveal
            >
              <button 
                type="button" 
                className="startup-offer-outline-button" 
                onClick={() => setVisibleFaqsCount(prev => prev + 4)}
              >
                Load More Questions
                <span aria-hidden="true">↓</span>
              </button>
            </div>
          )}

        </div>
      </section>

     

      {isModalOpen && (
        <div
          className="startup-offer-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className="startup-offer-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="startup-offer-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          data-lenis-prevent>
            <div className="startup-offer-modal-header">
              <div>
                <p className="startup-offer-section-label">STARTUP LAUNCH PROGRAM</p>
                <h2 id="startup-offer-modal-title">Get Your Startup Offer</h2>
                <p>Share a few details so the team can understand what you&apos;re building and what you need.</p>
              </div>
              <button
                type="button"
                className="startup-offer-modal-close"
                onClick={closeModal}
                aria-label="Close startup offer form"
                disabled={loading}
              >
                ×
              </button>
            </div>

            <form className="startup-offer-form" onSubmit={handleSubmit} noValidate>
                <div className="startup-offer-form-grid">
                  <Field label="Your Name" name="name" value={formData.name} onChange={updateField} error={errors.name} required autoComplete="name" />
                  <Field label="Business / Startup Name" name="businessName" value={formData.businessName} onChange={updateField} error={errors.businessName} required autoComplete="organization" />
                  <Field label="Email Address" name="email" type="email" value={formData.email} onChange={updateField} error={errors.email} required autoComplete="email" />
                  <Field label="Phone / WhatsApp" name="phone" type="tel" value={formData.phone} onChange={updateField} error={errors.phone} required autoComplete="tel" />
                </div>

                <SelectField label="What stage is your business?" name="stage" value={formData.stage} onChange={updateField} options={BUSINESS_STAGES} error={errors.stage} required />

                <fieldset className="startup-offer-fieldset">
                  <legend>What do you need? <span>*</span></legend>
                  <div className="startup-offer-service-options">
                    {SERVICE_OPTIONS.map((service) => (
                      <label className={`startup-offer-check-option ${formData.services.includes(service) ? "is-selected" : ""}`} key={service}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => toggleService(service)}
                        />
                        <span className="startup-offer-checkmark" aria-hidden="true">✓</span>
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <small className="startup-offer-field-error">{errors.services}</small>}
                </fieldset>

                {formData.services.includes("Other") && (
                  <Field label="Tell us what else you need" name="otherService" value={formData.otherService} onChange={updateField} error={errors.otherService} required />
                )}

                <div className="startup-offer-form-grid">
                  <SelectField label="When do you want to launch?" name="launchTimeline" value={formData.launchTimeline} onChange={updateField} options={LAUNCH_TIMELINES} error={errors.launchTimeline} required />
                  <SelectField label="Estimated budget" name="budget" value={formData.budget} onChange={updateField} options={BUDGET_OPTIONS} error={errors.budget} required />
                </div>

                <div className="startup-offer-field">
                  <label htmlFor="startup-description">Tell us briefly about your business <span>*</span></label>
                  <textarea
                    id="startup-description"
                    name="description"
                    value={formData.description}
                    onChange={updateField}
                    maxLength={1500}
                    rows={5}
                    placeholder="What are you building, who is it for, and what are you hoping to launch?"
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "startup-description-error" : "startup-description-count"}
                  />
                  <div className="startup-offer-field-meta">
                    {errors.description ? <small id="startup-description-error" className="startup-offer-field-error">{errors.description}</small> : <span />}
                    <small id="startup-description-count">{formData.description.length}/1500</small>
                  </div>
                </div>

                {feedback.error && <div className="startup-offer-submit-error" role="alert">{feedback.error}</div>}

                <div className="startup-offer-form-footer">
                  <p>By submitting this form, you agree to be contacted by Master Intech Solutions regarding your enquiry.</p>
                  <button type="submit" className="startup-offer-primary-button startup-offer-submit-button" disabled={loading}>
                    {loading ? "SUBMITTING..." : "GET MY STARTUP OFFER"}
                    {!loading && <img src={arrowbtn} alt="" aria-hidden="true" />}
                  </button>
                </div>
              </form>
          </div>
        </div>
      )}
    </main>
  );
}

function ServiceCard({ number, title, intro, items }) {
  return (
    <article className="startup-offer-service-card" data-startup-reveal>
      <div className="startup-offer-card-number">{number}</div>
      <div className="startup-offer-card-icon" aria-hidden="true">+</div>
      <p className="startup-offer-card-label">STARTUP SERVICE</p>
      <h3>{title}</h3>
      <p className="startup-offer-card-intro">{intro}</p>
      <ul>
        {items.map((item) => (
          <li key={item}><span aria-hidden="true">✓</span>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Field({ label, name, value, onChange, error, type = "text", required = false, autoComplete, placeholder }) {
  const errorId = `${name}-error`;
  return (
    <div className="startup-offer-field">
      <label htmlFor={`startup-${name}`}>{label} {required && <span>*</span>}</label>
      <input
        id={`startup-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && <small id={errorId} className="startup-offer-field-error">{error}</small>}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, error, required = false }) {
  const errorId = `${name}-error`;
  return (
    <div className="startup-offer-field">
      <label htmlFor={`startup-${name}`}>{label} {required && <span>*</span>}</label>
      <select
        id={`startup-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      >
        <option value="">Select an option</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      {error && <small id={errorId} className="startup-offer-field-error">{error}</small>}
    </div>
  );
}

export default StartupOffer;
