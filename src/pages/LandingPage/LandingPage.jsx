import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { submitEnquiry } from "../../services/api";
import Feedback from "../../components/home/Feedback";

import logo from "../../assets/design/26.png";
import heroBackground from "../../assets/landingHeroBackground.png";
import heroBackgoundImage from "../../assets/heroBackgroundImage.png";
import arrowbtn from "../../assets/arrowbtn.svg";
import arrowdown from "../../assets/arrowdown.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import emailIcon from "../../assets/email.svg";

import "./landingPage.css";

const SERVICES = [
    {
        number: "01",
        title: "AI & Intelligent Automation",
        description: "Smarter workflows. Higher productivity.",
        slug: "ai-intelligent-automation",
        icon: "ri-ai-generate-2",
    },
    {
        number: "02",
        title: "Custom Portal Development",
        description: "Modern, fast & responsive websites.",
        slug: "custom-portal-development",
        icon: "ri-node-tree",
    },
    {
        number: "03",
        title: "Web & Application",
        description: "Smarter workflows. Higher productivity.",
        slug: "web-application-development",
        icon: "ri-global-line",
    },
    {
        number: "04",
        title: "UI/UX & Product Design",
        description: "Beautiful design. Better experiences.",
        slug: "ui-ux-product-design",
        icon: "ri-pantone-line",
    },
    {
        number: "05",
        title: "Digital Marketing",
        description: "Grow your brand. Reach your audience.",
        slug: "digital-marketing",
        icon: "ri-megaphone-line",
    },
    {
        number: "06",
        title: "Cyber Security",
        description: "Advanced protection for digital assets.",
        slug: "cyber-security",
        icon: "ri-shield-check-line",
    },
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
    budget: "",
    requirement: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WHATSAPP_MESSAGE =
    "Hi Master Intech Solutions, I’d like to get in touch with your team. I have a question regarding your services and would like to discuss it further. Can we connect on WhatsApp?";

const WHATSAPP_LINK = `https://wa.me/919878263393?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
)}`;

const EMAIL_LINK =
    "https://mail.google.com/mail/?view=cm&fs=1&to=info@masterintechsolutions.com";

function scrollToInquiry() {
    document
        .getElementById("landing-quick-inquiry")
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
}

export default function LandingPage() {
    const navigate = useNavigate();
    const successTimerRef = useRef(null);

    const [formData, setFormData] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [feedbackState, setFeedbackState] = useState({
        success: "",
        error: "",
    });

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
            if (!current[name]) {
                return current;
            }

            const next = { ...current };
            delete next[name];
            return next;
        });

        if (feedbackState.error) {
            setFeedbackState({
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

        if (formData.requirement.trim().length < 1) {
            nextErrors.requirement =
                "Please briefly describe your requirement.";
        }

        return nextErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        setFeedbackState({
            success: "",
            error: "",
        });

        if (Object.keys(validationErrors).length > 0) {
            const firstError = Object.keys(validationErrors)[0];

            document
                .getElementById(`landing-${firstError}`)
                ?.focus();

            return;
        }

        setLoading(true);

        const enquiryMessage = [
            `Phone: ${formData.phone.trim() || "-"}`,
            `Company: ${formData.company.trim() || "-"}`,
            `Budget: ${formData.budget || "-"}`,
            "",
            "Project / Requirement:",
            formData.requirement.trim(),
        ].join("\n");

        try {
            await submitEnquiry({
                name: formData.name.trim(),
                email: formData.email.trim(),
                service: formData.service,
                message: enquiryMessage,
            });

            setFeedbackState({
                success: "Your enquiry has been submitted successfully.",
                error: "",
            });

            setFormData(INITIAL_FORM);
            setErrors({});

            successTimerRef.current = window.setTimeout(() => {
                navigate("/thank-you");
            }, 650);
        } catch (error) {
            setFeedbackState({
                success: "",
                error:
                    error?.message ||
                    "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="landing-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section
                className="landing-page__hero"
                style={{
                    backgroundImage: `url(${heroBackgoundImage})`,
                }}
            >
                <div
                    className="landing-page__hero-overlay"
                    aria-hidden="true"
                />

                <div className="landing-page__shell landing-page__hero-shell">

                    <a
                        className="landing-page__brand"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Master Intech Solutions"
                    >
                        <img
                            src={logo}
                            alt="Master Intech Solutions"
                        />
                    </a>

                    <div className="landing-page__hero-content">

                        <div className="landing-page__hero-copy">

                            <h1>
                                BRING THE CHALLENGE
                                <br />
                                LET&apos;S BUILD
                            </h1>

                            <p>
                                From ideas to scalable digital products, Master Intech
                                Solutions helps businesses build smarter digital solutions.
                            </p>

                            <button
                                type="button"
                                className="landing-page__primary-button"
                                onClick={scrollToInquiry}
                            >
                                START YOUR PROJECT
                                <span aria-hidden="true">→</span>
                            </button>

                        </div>

                        {/* =================================================
                QUICK INQUIRY
            ================================================= */}

                        <div
                            className="landing-page__inquiry-card"
                            id="landing-quick-inquiry"
                        >
                            <div className="landing-page__inquiry-card-inner">

                                <h2>QUICK INQUIRY</h2>

                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                >

                                    <div className="landing-page__form-grid">

                                        {/* NAME */}

                                        <div className="landing-page__field">
                                            <label
                                                htmlFor="landing-name"
                                                className="landing-page__sr-only"
                                            >
                                                Name
                                            </label>

                                            <input
                                                id="landing-name"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={updateField}
                                                placeholder="Name"
                                                autoComplete="name"
                                                aria-invalid={Boolean(errors.name)}
                                                aria-describedby={
                                                    errors.name
                                                        ? "landing-name-error"
                                                        : undefined
                                                }
                                                required
                                            />

                                            {errors.name && (
                                                <small
                                                    id="landing-name-error"
                                                    className="landing-page__field-error"
                                                >
                                                    {errors.name}
                                                </small>
                                            )}
                                        </div>

                                        {/* EMAIL */}

                                        <div className="landing-page__field">
                                            <label
                                                htmlFor="landing-email"
                                                className="landing-page__sr-only"
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="landing-email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={updateField}
                                                placeholder="Email"
                                                autoComplete="email"
                                                aria-invalid={Boolean(errors.email)}
                                                aria-describedby={
                                                    errors.email
                                                        ? "landing-email-error"
                                                        : undefined
                                                }
                                                required
                                            />

                                            {errors.email && (
                                                <small
                                                    id="landing-email-error"
                                                    className="landing-page__field-error"
                                                >
                                                    {errors.email}
                                                </small>
                                            )}
                                        </div>

                                        {/* PHONE */}

                                        <div className="landing-page__field">
                                            <label
                                                htmlFor="landing-phone"
                                                className="landing-page__sr-only"
                                            >
                                                Phone Number
                                            </label>

                                            <input
                                                id="landing-phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={updateField}
                                                placeholder="Phone No."
                                                autoComplete="tel"
                                                inputMode="tel"
                                            />
                                        </div>

                                        {/* COMPANY */}

                                        <div className="landing-page__field">
                                            <label
                                                htmlFor="landing-company"
                                                className="landing-page__sr-only"
                                            >
                                                Company Name
                                            </label>

                                            <input
                                                id="landing-company"
                                                name="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={updateField}
                                                placeholder="Company name"
                                                autoComplete="organization"
                                            />
                                        </div>

                                    </div>

                                    {/* SERVICE */}

                                    <div className="landing-page__field landing-page__field-full">
                                        <label
                                            htmlFor="landing-service"
                                            className="landing-page__sr-only"
                                        >
                                            What do you need?
                                        </label>

                                        <div className="landing-page__select-wrap">
                                            <select
                                                id="landing-service"
                                                name="service"
                                                value={formData.service}
                                                onChange={updateField}
                                                aria-invalid={Boolean(errors.service)}
                                                aria-describedby={
                                                    errors.service
                                                        ? "landing-service-error"
                                                        : undefined
                                                }
                                                required
                                            >
                                                <option value="">
                                                    What do you need?
                                                </option>

                                                {SERVICES.map((service) => (
                                                    <option
                                                        key={service.slug}
                                                        value={service.title}
                                                    >
                                                        {service.title}
                                                    </option>
                                                ))}
                                            </select>

                                            <img
                                                src={arrowdown}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </div>

                                        {errors.service && (
                                            <small
                                                id="landing-service-error"
                                                className="landing-page__field-error"
                                            >
                                                {errors.service}
                                            </small>
                                        )}
                                    </div>

                                    {/* BUDGET */}

                                    <div className="landing-page__field landing-page__field-full">
                                        <label
                                            htmlFor="landing-budget"
                                            className="landing-page__sr-only"
                                        >
                                            Budget
                                        </label>

                                        <div className="landing-page__select-wrap">
                                            <select
                                                id="landing-budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={updateField}
                                            >
                                                <option value="">
                                                    Budget
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

                                            <img
                                                src={arrowdown}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>

                                    {/* REQUIREMENT */}

                                    <div className="landing-page__field landing-page__field-full">
                                        <label
                                            htmlFor="landing-requirement"
                                            className="landing-page__sr-only"
                                        >
                                            Project requirement
                                        </label>

                                        <textarea
                                            id="landing-requirement"
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={updateField}
                                            placeholder="Briefly describe your ideas, requirements or goals..."
                                            rows={3}
                                            maxLength={5000}
                                            aria-invalid={Boolean(errors.requirement)}
                                            aria-describedby={
                                                errors.requirement
                                                    ? "landing-requirement-error"
                                                    : undefined
                                            }
                                            required
                                        />

                                        {errors.requirement && (
                                            <small
                                                id="landing-requirement-error"
                                                className="landing-page__field-error"
                                            >
                                                {errors.requirement}
                                            </small>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="landing-page__inquiry-submit"
                                        disabled={loading}
                                    >
                                        {loading
                                            ? "SUBMITTING..."
                                            : "Submit Inquiry"}

                                        {!loading && (
                                            <span aria-hidden="true">
                                                <img
                                                    src={arrowbtn}
                                                    alt=""
                                                />
                                            </span>
                                        )}
                                    </button>

                                    <div className="landing-page__privacy">
                                        <i
                                            className="ri-shield-check-line"
                                            aria-hidden="true"
                                        />
                                        <span>
                                            Your information is safe with us
                                        </span>
                                    </div>

                                    <div
                                        className="landing-page__form-feedback"
                                        aria-live="polite"
                                        aria-atomic="true"
                                    >
                                        {feedbackState.success && (
                                            <span className="landing-page__success">
                                                {feedbackState.success}
                                            </span>
                                        )}

                                        {feedbackState.error && (
                                            <span
                                                className="landing-page__error"
                                                role="alert"
                                            >
                                                {feedbackState.error}
                                            </span>
                                        )}
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
          SERVICES
      ===================================================== */}

            <section className="landing-page__services">

                <div
                    className="landing-page__services-grid-art"
                    aria-hidden="true"
                />

                <div className="landing-page__shell">

                    <div className="landing-page__section-heading landing-page__section-heading-center">

                        <h2>OUR SERVICES</h2>

                        <p>
                            From ideas to execution, we create technology that
                            helps you grow, innovate and stay ahead.
                        </p>

                    </div>

                    <div className="landing-page__services-list">

                        {SERVICES.map((service) => (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="landing-page__service-item"
                            >
                                <span className="landing-page__service-icon">
                                    <i
                                        className={service.icon}
                                        aria-hidden="true"
                                    />
                                </span>

                                <span className="landing-page__service-copy">

                                    <span className="landing-page__service-title">
                                        {service.title}
                                    </span>

                                    <span className="landing-page__service-description">
                                        {service.description}
                                    </span>

                                </span>
                            </Link>
                        ))}

                    </div>

                </div>
            </section>

            {/* =====================================================
          WHY MASTER INTECH
      ===================================================== */}

            <section className="landing-page__why">

                <div className="landing-page__shell landing-page__why-grid">

                    <div className="landing-page__benefits">

                        <div className="landing-page__benefit-card">
                            <i
                                className="ri-group-line"
                                aria-hidden="true"
                            />
                            <h3>Experienced Team</h3>
                            <p>
                                Skilled professionals with real-world experience.
                            </p>
                        </div>

                        <div className="landing-page__benefit-card">
                            <i
                                className="ri-time-line"
                                aria-hidden="true"
                            />
                            <h3>On-Time Delivery</h3>
                            <p>
                                We value your time and deliver as promised.
                            </p>
                        </div>

                        <div className="landing-page__benefit-card">
                            <i
                                className="ri-money-dollar-circle-line"
                                aria-hidden="true"
                            />
                            <h3>Competitive Pricing</h3>
                            <p>
                                High quality solutions at the best value.
                            </p>
                        </div>

                        <div className="landing-page__benefit-card">
                            <i
                                className="ri-headphone-line"
                                aria-hidden="true"
                            />
                            <h3>Long-Term Support</h3>
                            <p>
                                We&apos;re with you, even after launch.
                            </p>
                        </div>

                    </div>

                    <div className="landing-page__why-copy">

                        <span className="landing-page__eyebrow">
                            WHY MASTER INTECH SOLUTIONS
                        </span>

                        <h2>
                            YOUR SUCCESS IS OUR
                            <br />
                            TOP PRIORITY
                        </h2>

                        <p>
                            We combine innovation, technical expertise and a
                            client-first approach to deliver solutions that make
                            a real impact.
                        </p>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="landing-page__whatsapp-button"
                        >
                            <img
                                src={whatsappIcon}
                                alt=""
                                aria-hidden="true"
                            />
                            Chat on WhatsApp
                        </a>

                    </div>

                </div>
            </section>

            {/* =====================================================
          PROCESS
      ===================================================== */}

            <section className="landing-page__process">

                <div
                    className="landing-page__process-grid"
                    aria-hidden="true"
                />

                <div className="landing-page__shell">

                    <span className="landing-page__eyebrow">
                        OUR PROCESS
                    </span>

                    <h2 className="landing-page__process-title">
                        SIMPLE STEPS TO GET STARTED
                    </h2>

                    <div className="landing-page__steps">

                        <div className="landing-page__step">
                            <div className="landing-page__step-icon">
                                <i
                                    className="ri-file-list-3-line"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3>Submit Inquiry</h3>
                                <p>
                                    Share your requirements and let&apos;s get started.
                                </p>
                            </div>
                        </div>

                        <div className="landing-page__step">
                            <div className="landing-page__step-icon">
                                <i
                                    className="ri-links-line"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3>Get a Response</h3>
                                <p>
                                    Hear back from our team with the next steps.
                                </p>
                            </div>
                        </div>

                        <div className="landing-page__step">
                            <div className="landing-page__step-icon">
                                <i
                                    className="ri-chat-3-line"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3>Discuss &amp; Plan</h3>
                                <p>
                                    Explore your goals and shape the right solution.
                                </p>
                            </div>
                        </div>

                        <div className="landing-page__step">
                            <div className="landing-page__step-icon">
                                <i
                                    className="ri-computer-line"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3>Digital Transformation</h3>
                                <p>
                                    Turn your ideas into smarter digital solutions.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
          EXISTING FEEDBACK / TESTIMONIAL
      ===================================================== */}

            <section className="landing-page__feedback-wrapper">
                <Feedback />
            </section>

            {/* =====================================================
          FINAL STATS + CTA
      ===================================================== */}

            <section className="landing-page__final-cta">

                <div
                    className="landing-page__final-grid"
                    aria-hidden="true"
                />

                <div className="landing-page__shell landing-page__final-grid-layout">

                    <div className="landing-page__stats">

                        <div className="landing-page__stat">
                            <strong>500K+</strong>
                            <span>Project Delivered</span>
                        </div>

                        <div className="landing-page__stat">
                            <strong>50K+</strong>
                            <span>Client Satisfaction</span>
                        </div>

                        <div className="landing-page__stat">
                            <strong>15+</strong>
                            <span>Years of Experience</span>
                        </div>

                        <div className="landing-page__stat">
                            <strong>50K+</strong>
                            <span>Happy Clients</span>
                        </div>

                    </div>

                    <div className="landing-page__final-copy">

                        <span className="landing-page__eyebrow">
                            READY TO GET STARTED
                        </span>

                        <h2>
                            LET&apos;S TURN YOUR IDEA
                            <br />
                            INTO REALITY
                        </h2>

                        <p>
                            Fill out the quick inquiry form or contact us directly.
                        </p>

                        <div className="landing-page__final-actions">

                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="landing-page__whatsapp-button"
                            >
                                <img
                                    src={whatsappIcon}
                                    alt=""
                                    aria-hidden="true"
                                />
                                Chat on WhatsApp
                            </a>

                            <a
                                href={EMAIL_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="landing-page__email-button"
                            >
                                <img
                                    src={emailIcon}
                                    alt=""
                                    aria-hidden="true"
                                />
                                Send Email
                            </a>

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
          CUSTOM FOOTER
      ===================================================== */}

            <footer className="landing-page__footer">

                <div className="landing-page__footer-brand">
                    MASTER INTECH SOLUTIONS
                </div>

                <div className="landing-page__footer-social">

                    <a
                        href="https://www.facebook.com/MasterIntechSolutions/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                    >
                        <i
                            className="ri-facebook-fill"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/mastersintechsolutions/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <i
                            className="ri-instagram-line"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/master-intech-solutions-43ba9b39"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i
                            className="ri-linkedin-box-fill"
                            aria-hidden="true"
                        />
                    </a>

                </div>

                <div className="landing-page__footer-bottom">

                    <span>
                        © 2026 Master Intech Solutions
                    </span>

                    <span>
                        Registration No : 03AATFM8663C1ZO
                    </span>

                </div>

            </footer>

        </main>
    );
}