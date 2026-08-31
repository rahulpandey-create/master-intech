import { useState } from "react";
import { submitEnquiry } from "../services/api";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = await submitEnquiry(formData);

      setSuccess(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-heading">
        <p className="section-label">HAVE A PROJECT IN MIND?</p>

        <h2>
          LET'S
          <br />
          <span>TALK.</span>
        </h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p>
            Let's create something meaningful together.
            Tell us about your project and we'll get back
            to you.
          </p>

          <a href="mailto:hello@masterintech.com">
            hello@masterintech.com
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "SENDING..." : "SEND ENQUIRY ↗"}
          </button>

          {success && <p className="form-success">{success}</p>}
          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;