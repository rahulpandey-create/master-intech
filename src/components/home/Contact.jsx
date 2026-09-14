import phone from "../../assets/phone.svg"
import email from "../../assets/email.svg"
import location from "../../assets/location.svg"
export default function Contact({ formData, loading, feedback, updateField, handleSubmit }) {
  return (
<section id="contact" className="contact-design">
  <div className="section-shell contact-grid">
    <div className="contact-details" data-reveal>
      <h2>LET&apos;S TALK</h2>
      <p>Tell us about your project — whether it&apos;s<br />a website, SEO, or marketing.</p>
      <div className="contact-rule" />
      <div className="contact-line">
        <span className="contact-dot phone-dot"><img src={phone}></img> </span>
        <div><strong>Phone</strong><span>+91-98782 63393<br />+91-98068 85887</span></div>
        <span className="contact-dot email-dot"><img src={email}></img></span>
        <div><strong>Email</strong><span>info@masterintechsolutions.com</span></div>
      </div>
      <div className="contact-line address">
        <span className="contact-dot address-dot"><img src={location}></img></span>
        <div><strong>Address</strong><span>SCF 36 Phase XI, Sector 65,<br />Sahibzada Ajit Singh Nagar, Punjab 160055</span></div>
      </div>
    </div>

    <form className="message-card" onSubmit={handleSubmit} data-reveal>
      <p>MIT Solutions</p>
      <h3>LEAVE A MESSAGE</h3>
      <label>NAME*
        <input name="name" value={formData.name} onChange={updateField} required minLength={2} maxLength={100} />
      </label>
      <label>EMAIL*
        <input name="email" type="email" value={formData.email} onChange={updateField} required />
      </label>
      <label>MESSAGE*
        <textarea name="message" value={formData.message} onChange={updateField} required minLength={10} maxLength={5000} />
      </label>
      <button disabled={loading}>{loading ? "SENDING..." : "Send Message"}</button>
      {feedback.success && <small className="success">{feedback.success}</small>}
      {feedback.error && <small className="error">{feedback.error}</small>}
    </form>
  </div>
</section>

  );
}