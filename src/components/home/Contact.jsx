import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import heroBackground from "../../assets/bgvid.gif";
import arrowdown from "../../assets/arrowdown.svg";

export default function Contact({
  formData,
  loading,
  feedback,
  updateField,
  handleSubmit,
}) {
  return (
    <section
      id="contact"
      className="contact-design"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="section-shell contact-grid">
        <div className="contact-details">
          <h2>LET'S BUILD WHAT'S NEXT</h2>

          <p>
            Tell us what you’re building or what’s holding your business back.
            We’ll help you find the right technology solution.
          </p>

          <div className="xl:block md:flex gap-5 justify-between">
            {/* PHONE */}
            <div className="contact-line address">
              <span className="contact-dot address-dot">
                <img src={phone} alt="Support" />
              </span>

              <div>
                <strong>Support</strong>
                <span>+91-98782 63393 | +91-8968 085887</span>
              </div>
            </div>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@masterintechsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-line address"
            >
              <span className="contact-dot address-dot">
                <img src={email} alt="Email" />
              </span>

              <div>
                <strong>Email</strong>
                <span>info@masterintechsolutions.com</span>
              </div>
            </a>
          </div>

          {/* ADDRESS */}
          <div className="contact-line address">
            <span className="contact-dot address-dot">
              <img src={location} alt="Location" />
            </span>

            <div>
              <strong>Address</strong>
              <span>
                SCF 36 Phase XI, Sector 65,
                <br />
                Sahibzada Ajit Singh Nagar, Punjab 160065
              </span>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          className="message-card"
          onSubmit={handleSubmit}
          data-reveal
        >
          <p>Master Intech Solutions</p>

          <h3>LEAVE A MESSAGE</h3>

          {/* NAME */}
          <label>
            NAME*

            <input
              name="name"
              value={formData.name}
              onChange={updateField}
              required
              minLength={2}
              maxLength={100}
            />
          </label>

          {/* EMAIL */}
          <label>
            EMAIL*

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={updateField}
              required
            />
          </label>

          {/* SERVICE */}
          <label className="service-field">
            SELECT SERVICE*

            <div className="select-wrap">
              <select
                name="service"
                className="custom-select"
                value={formData.service}
                onChange={updateField}
                required
              >
                <option value="">Select Service</option>

                <option value="UI/UX Design">
                  UI/UX Design
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="CMS Development">
                  CMS Development
                </option>

                <option value="E-Commerce Solutions">
                  E-Commerce Solutions
                </option>

                <option value="App Development">
                  App Development
                </option>
              </select>

              <span className="select-arrow">
                <img src={arrowdown} alt="" />
              </span>
            </div>
          </label>

          {/* MESSAGE */}
          <label>
            MESSAGE*

            <textarea
              name="message"
              value={formData.message}
              onChange={updateField}
              required
              minLength={1}
              maxLength={5000}
            />
          </label>

          {/* SUBMIT */}
          <button type="submit" disabled={loading}>
            {loading ? "SENDING..." : "Send Message"}
          </button>

          {/* FEEDBACK */}
          {feedback.success && (
            <small className="success">
              {feedback.success}
            </small>
          )}

          {feedback.error && (
            <small className="error">
              {feedback.error}
            </small>
          )}
        </form>
      </div>
    </section>
  );
}