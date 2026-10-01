import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitEnquiry } from "../services/api";
import Breadcrumbs from "../components/Breadcrumbs";

import phone from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import location from "../assets/location.svg";
import arrowbtn from "../assets/arrowbtn.svg";
import arrowdown from "../assets/arrowdown.svg";

const SERVICES = [
  "AI & Intelligent Automation",
  "Custom Portal Development",
  "Web & Application Development",
  "UI/UX & Product Design",
  "Digital Marketing",
  "Cyber Security",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000+",
  "Not sure",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  requirement: "",
  budget: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactUs() {
  const navigate = useNavigate();
  const successTimerRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState({
    success: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) return current;

      const next = { ...current };
      delete next[name];
      return next;
    });

    if (feedback.error) {
      setFeedback({
        success: "",
        error: "",
      });
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      nextErrors.service = "Please select a service.";
    }

    if (formData.requirement.trim().length < 10) {
      nextErrors.requirement =
        "Please describe your project or requirement in at least 10 characters.";
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message =
        "Please provide a message with at least 10 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    setFeedback({
      success: "",
      error: "",
    });

    if (Object.keys(validationErrors).length > 0) {
      const firstError = Object.keys(validationErrors)[0];

      document
        .getElementById(`contact-${firstError}`)
        ?.focus();

      return;
    }

    setLoading(true);

    /*
     * The existing API remains the only submission endpoint.
     * The backend requires name, email, service and message.
     * Additional contact fields are serialized into the message
     * while service is sent separately as required by the API contract.
     */
    const enquiryMessage = [
      `Service: ${formData.service}`,
      `Phone: ${formData.phone.trim() || "-"}`,
      `Company: ${formData.company.trim() || "-"}`,
      `Budget: ${formData.budget || "-"}`,
      "",
      "Project / Requirement:",
      formData.requirement.trim(),
      "",
      "Message:",
      formData.message.trim(),
    ].join("\n");

    try {
      await submitEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
        message: enquiryMessage,
      });

      setFeedback({
        success: "Your enquiry has been submitted successfully.",
        error: "",
      });

      setFormData(INITIAL_FORM);
      setErrors({});

      successTimerRef.current = window.setTimeout(() => {
        navigate("/thank-you");
      }, 650);
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

  const scrollToForm = () => {
    document.getElementById("contact-enquiry-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.setTimeout(() => {
      document.getElementById("contact-name")?.focus();
    }, 450);
  };

  return (
    <main className="contact-us-page">
      {/* HERO */}
      <section className="contact-us-hero">
        <div
          className="contact-us-hero-grid"
          aria-hidden="true"
        ></div>

        <div
          className="contact-us-hero-glow contact-us-hero-glow-one"
          aria-hidden="true"
        ></div>

        <div
          className="contact-us-hero-glow contact-us-hero-glow-two"
          aria-hidden="true"
        ></div>

        <div className="contact-us-container contact-us-hero-inner">
          <Breadcrumbs />

          

          <h1>Let&apos;s Build Something That Matters.</h1>

          <p>
            Tell us what you&apos;re building, what needs to improve, or where
            technology can take your business next. We can help you explore
            AI, software, automation, digital products and other technology
            requirements.
          </p>

          <button
            type="button"
            className="contact-us-primary-btn"
            onClick={scrollToForm}
          >
            Start a Conversation

            <span aria-hidden="true">
              <img src={arrowbtn} alt="" />
            </span>
          </button>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section
        className="contact-us-information"
        aria-labelledby="contact-information-title"
      >
        <div className="contact-us-container">
          <div className="contact-us-section-heading page-reveal">
            <span className="contact-us-kicker">
              GET IN TOUCH
            </span>

            <h2 id="contact-information-title">
              Tell us what you&apos;re working on.
            </h2>

            <p>
              Share the essentials and we&apos;ll have the right context to
              understand your enquiry.
            </p>
          </div>

          <div className="contact-us-info-grid">
            {/* PHONE */}
            <a
              className="contact-us-info-card page-reveal"
              href="tel:+919878263393"
            >
              <span className="contact-us-info-icon">
                <img src={phone} alt="" />
              </span>

              <span>
                <strong>Support</strong>

                <span>
                  +91-98782 63393 | +91-8968 085887
                </span>
              </span>
            </a>

            {/* EMAIL */}
            <a
              className="contact-us-info-card page-reveal"
              href="mailto:info@masterintechsolutions.com"
            >
              <span className="contact-us-info-icon">
                <img src={emailIcon} alt="" />
              </span>

              <span>
                <strong>Email</strong>

                <span>
                  info@masterintechsolutions.com
                </span>
              </span>
            </a>

            {/* LOCATION */}
            <div className="contact-us-info-card page-reveal">
              <span className="contact-us-info-icon">
                <img src={location} alt="" />
              </span>

              <span>
                <strong>Location</strong>

                <span>
                  SCF 36 Phase XI, Sector 65,
                  <br />
                  Sahibzada Ajit Singh Nagar, Punjab 160055
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY + GOOGLE MAP */}
      <section
        className="contact-us-form-section"
        id="contact-enquiry-form"
        aria-labelledby="contact-form-title"
      >
        <div className="contact-us-container contact-us-form-layout">

          {/* LEFT COLUMN */}
          <div className="contact-us-form-intro page-reveal">
            <span className="contact-us-kicker">
              PROJECT ENQUIRY
            </span>

            <h2 id="contact-form-title">
              Start with the details.
            </h2>

            <p>
              Whether you have a defined project or an early-stage idea,
              give us enough context to understand what you need.
            </p>

            {/* CAPABILITIES */}
            {/* <div
              className="contact-us-trust-list"
              aria-label="Master Intech capabilities"
            >
              <div>
                <span aria-hidden="true">01</span>
                <p>AI &amp; automation solutions</p>
              </div>

              <div>
                <span aria-hidden="true">02</span>
                <p>Scalable web applications</p>
              </div>

              <div>
                <span aria-hidden="true">03</span>
                <p>Custom business portals</p>
              </div>

              <div>
                <span aria-hidden="true">04</span>
                <p>UI/UX &amp; digital product design</p>
              </div>

              <div>
                <span aria-hidden="true">05</span>
                <p>Digital marketing</p>
              </div>

              <div>
                <span aria-hidden="true">06</span>
                <p>Cybersecurity</p>
              </div>
            </div> */}

            {/* GOOGLE MAPS */}
            <div className="contact-us-map-card">
              <div className="contact-us-map-wrapper">
                <iframe
                  title="Master Intech Solutions location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.45616673973734!2d76.7440749768904!3d30.681871751884977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee617d77cee3%3A0x9a2c176de1908123!2sMaster%20Intech%20Solutions!5e0!3m2!1sen!2sus!4v1790849231594!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <a
                href="https://www.google.com/maps/place/Master+Intech+Solutions/@30.6818399,76.7441781,17z/data=!3m1!4b1!4m6!3m5!1s0x390fee617d77cee3:0x9a2c176de1908123!8m2!3d30.6818399!4d76.7441781!16s%2Fg%2F11bbwl511s?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-us-map-link"
              >
                Open in Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

            {/* RIGHT COLUMN — FORM */}
            <form
              className="contact-us-form page-reveal"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-us-form-header">
                <span>MASTER INTECH SOLUTIONS</span>

                <h3>Leave a message.</h3>

                {/* <p>Fields marked with * are required.</p> */}
              </div>

              <div className="contact-us-form-grid">
                {/* NAME */}
                <div className="contact-us-field">
                  <label htmlFor="contact-name">
                    Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={updateField}
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name
                        ? "contact-name-error"
                        : undefined
                    }
                    required
                  />

                  {errors.name && (
                    <small
                      id="contact-name-error"
                      className="contact-us-field-error"
                    >
                      {errors.name}
                    </small>
                  )}
                </div>

                {/* EMAIL */}
                <div className="contact-us-field">
                  <label htmlFor="contact-email">
                    Work / Business Email *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={updateField}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email
                        ? "contact-email-error"
                        : undefined
                    }
                    required
                  />

                  {errors.email && (
                    <small
                      id="contact-email-error"
                      className="contact-us-field-error"
                    >
                      {errors.email}
                    </small>
                  )}
                </div>

                {/* PHONE */}
                <div className="contact-us-field">
                  <label htmlFor="contact-phone">
                    Phone
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                {/* COMPANY */}
                <div className="contact-us-field">
                  <label htmlFor="contact-company">
                    Company
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={updateField}
                    maxLength={150}
                    autoComplete="organization"
                  />
                </div>

                {/* SERVICE */}
                <div className="contact-us-field">
                  <label htmlFor="contact-service">
                    Service *
                  </label>

                  <div className="contact-us-select-wrap">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={updateField}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={
                        errors.service
                          ? "contact-service-error"
                          : undefined
                      }
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      {SERVICES.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>

                    <span aria-hidden="true">
                      <img src={arrowdown} alt="" />
                    </span>
                  </div>

                  {errors.service && (
                    <small
                      id="contact-service-error"
                      className="contact-us-field-error"
                    >
                      {errors.service}
                    </small>
                  )}
                </div>

                {/* BUDGET */}
                <div className="contact-us-field">
                  <label htmlFor="contact-budget">
                    Budget
                  </label>

                  <div className="contact-us-select-wrap">
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={updateField}
                    >
                      <option value="">
                        Select a range
                      </option>

                      {BUDGETS.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>

                    <span aria-hidden="true">
                      <img src={arrowdown} alt="" />
                    </span>
                  </div>
                </div>

                {/* REQUIREMENT */}
                <div className="contact-us-field contact-us-field-full">
                  <label htmlFor="contact-requirement">
                    Project / Requirement *
                  </label>

                  <textarea
                    id="contact-requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={updateField}
                    minLength={10}
                    maxLength={5000}
                    rows={2}
                    aria-invalid={Boolean(errors.requirement)}
                    aria-describedby={
                      errors.requirement
                        ? "contact-requirement-error"
                        : undefined
                    }
                    required
                  />

                  {errors.requirement && (
                    <small
                      id="contact-requirement-error"
                      className="contact-us-field-error"
                    >
                      {errors.requirement}
                    </small>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="contact-us-field contact-us-field-full">
                  <label htmlFor="contact-message">
                    Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={updateField}
                    minLength={10}
                    maxLength={5000}
                    rows={2}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message
                        ? "contact-message-error"
                        : undefined
                    }
                    required
                  />

                  {errors.message && (
                    <small
                      id="contact-message-error"
                      className="contact-us-field-error"
                    >
                      {errors.message}
                    </small>
                  )}
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-us-submit"
                disabled={loading}
              >
                {loading
                  ? "SENDING..."
                  : "Send Enquiry"}

                {!loading && (
                  <span aria-hidden="true">
                    <img src={arrowbtn} alt="" />
                  </span>
                )}
              </button>

              {/* FEEDBACK */}
              <div
                className="contact-us-feedback"
                aria-live="polite"
                aria-atomic="true"
              >
                {feedback.success && (
                  <p className="contact-us-success">
                    {feedback.success}
                  </p>
                )}

                {feedback.error && (
                  <p
                    className="contact-us-error"
                    role="alert"
                  >
                    {feedback.error}
                  </p>
                )}
              </div>
            </form>
          </div>
      </section>

      {/* FAQ */}
      <section
        className="contact-us-faq-section"
        aria-labelledby="contact-faq-title"
      >
        <div className="contact-us-container">
          <div className="contact-us-section-heading page-reveal">
            <span className="contact-us-kicker">
              COMMON QUESTIONS
            </span>

            <h2 id="contact-faq-title">
              Before you send your enquiry.
            </h2>
          </div>

          <div className="contact-us-faq-grid">
            <details className="contact-us-faq page-reveal">
              <summary>
                What information should I include in my enquiry?
              </summary>

              <p>
                Share what you are trying to build or improve, the service you
                are considering, your main requirements, and any useful project
                context. A rough budget is optional.
              </p>
            </details>

            <details className="contact-us-faq page-reveal">
              <summary>
                How does the consultation process work?
              </summary>

              <p>
                Start by submitting the enquiry form with the available
                project context. The team can then review the requirement and
                continue the discussion using the contact details you provide.
              </p>
            </details>

            <details className="contact-us-faq page-reveal">
              <summary>
                What types of projects does Master Intech work on?
              </summary>

              <p>
                The current service offering covers AI and intelligent
                automation, custom portals, web and application development,
                UI/UX and product design, digital marketing, and cybersecurity.
              </p>
            </details>

            <details className="contact-us-faq page-reveal">
              <summary>
                Can you work with an existing product or codebase?
              </summary>

              <p>
                Yes. Include the current product, codebase or technical
                situation in your requirement so the team can understand the
                existing context.
              </p>
            </details>

            <details className="contact-us-faq page-reveal">
              <summary>
                How can I request a project estimate?
              </summary>

              <p>
                Describe the project scope and requirements in the form and
                include a budget range if you have one. This gives the team
                useful context for the next discussion.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="contact-us-final-cta"
        aria-labelledby="contact-final-title"
      >
        <div className="contact-us-container">
          <div className="contact-us-final-inner page-reveal">
            <span className="contact-us-kicker">
              LET&apos;S WORK TOGETHER
            </span>

            <h2 id="contact-final-title">
              Have an idea? Let&apos;s turn it <br></br>into something real.
            </h2>

            <button
              type="button"
              className="contact-us-primary-btn"
              onClick={scrollToForm}
            >
              Start Your Enquiry

              <span aria-hidden="true">
                <img src={arrowbtn} alt="" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}