import phone from "../../assets/phone.svg"
import email from "../../assets/email.svg"
import location from "../../assets/location.svg"
import heroBackground from "../../assets/bgvid.gif";
import arrowdown from "../../assets/arrowdown.svg";
export default function Contact({ formData, loading, feedback, updateField, handleSubmit }) {
  return (
<section id="contact" className="contact-design" style={{ backgroundImage: `url(${heroBackground})` }}>
  <div className="section-shell contact-grid">
    <div className="contact-details">
      <h2>LET'S BUILD WHAT'S NEXT</h2>
      <p>Tell us what you’re building or what’s holding your business back. We’ll help you find the right technology solution.
</p>
      {/* <div className="contact-rule" /> */}
      <div className="xl:block md:flex gap-5 justify-between ">
      <div className="contact-line address ">
        <span className="contact-dot address-dot"><img src={phone}></img></span>
        <div><strong>Support</strong><span>+91-98782 63393 | +91-8968 085887</span></div>
      </div>
      <div className="contact-line address ">
        <span className="contact-dot address-dot"><img src={email}></img></span>
        <div><strong>Email</strong><span>info@masterintechsolutions.com</span></div>
      </div>
      </div>
      <div className="contact-line address">
        <span className="contact-dot address-dot"><img src={location}></img></span>
        <div><strong>Address</strong><span>SCF 36 Phase XI, Sector 65,<br />Sahibzada Ajit Singh Nagar, Punjab 160055</span></div>
      </div>
    </div>

    <form className="message-card" onSubmit={handleSubmit} data-reveal>
      <p>Master Intech Solutions</p>
      <h3>LEAVE A MESSAGE</h3>
      <label>NAME*
        <input name="name" value={formData.name} onChange={updateField} required minLength={2} maxLength={100} />
      </label>
      <label>EMAIL*
        <input name="email" type="email" value={formData.email} onChange={updateField} required />
      </label>
     <label className="service-field">
    Select Service*

    <div className="select-wrap">
        <select className="custom-select">
            <option value="">Select Field</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="web-development">Web Development</option>
            <option value="wordpress">CMS Development</option>
            <option value="shopify">E-Commerce Solutions</option>
            <option value="app-development">App Development</option>
        </select>

        <span className="select-arrow"><img src={arrowdown}></img> </span>
    </div>
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