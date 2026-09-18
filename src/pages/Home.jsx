import { useEffect, useState } from "react";
import { submitEnquiry } from "../services/api";
import Hero from "../components/home/Hero";
import Expertise from "../components/home/Expertise";
import About from "../components/home/About";
import Award from "../components/home/Award";
import Brands from "../components/home/Brands";
// import Technology from "../components/home/Technology";
import Feedback from "../components/home/Feedback";
import Contact from "../components/home/Contact";


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ success: "", error: "" });

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const updateField = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ success: "", error: "" });
    try {
      const data = await submitEnquiry(formData);
      setFeedback({ success: data.message, error: "" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback({ success: "", error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="site-home">
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Expertise />
      <About />
      <Award />
      <Brands />
      {/* <Technology/> */}
      <Feedback />
      <Contact formData={formData} loading={loading} feedback={feedback} updateField={updateField} handleSubmit={handleSubmit} />
      
      
    </main>
  );
}

export default Home;
