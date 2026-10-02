import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/logomaster.svg";

import Home from "./pages/Home";
import Services from "./pages/Services";
import StartupOffer from "./pages/StartupOffer";
import ThankYou from "./pages/Thankyou";
import ContactUs from "./pages/ContactUs";
import PageTransition from "./components/home/PageTransition";
import DesignNav from "./components/home/designNav.jsx";
import Footer from "./components/home/Footer.jsx";

const MASTER_INTECH_WHATSAPP_MESSAGE =
  "Hi Master Intech Solutions, I’d like to get in touch with your team I have a question regarding your services and would like to discuss it further. Can we connect on WhatsApp?";

const WHATSAPP_LINK = `https://wa.me/919878263393?text=${encodeURIComponent(
  MASTER_INTECH_WHATSAPP_MESSAGE
)}`;

import arrowtopp from "./assets/arrowtopp.svg";
import support from "./assets/support.svg";
// import Breadcrumbs from "./components/Breadcrumbs.jsx";
import AIIntelligentAutomation from "./pages/services/AIIntelligentAutomation";
import CustomPortalDevelopment from "./pages/services/CustomPortalDevelopment";
import WebApplicationDevelopment from "./pages/services/WebApplicationDevelopment";
import UIUXProductDesign from "./pages/services/UIUXProductDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import CyberSecurity from "./pages/services/CyberSecurity.jsx";
import Portfolio from "./pages/Portfolio";
import SEO from "./components/SEO";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // ==========================================
    // 1. LENIS SMOOTH SCROLL
    // ==========================================

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      syncTouch: true,
    });

    lenisRef.current = lenis;

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    // ==========================================
    // 2. SCROLL LISTENER (UPDATED FOR LENIS)
    // ==========================================

    const handleScroll = (e) => {
      setShowBackToTop(e.scroll > 500);
    };

    lenis.on("scroll", handleScroll);

    // ==========================================
    // 3. CONTENT PROTECTION
    // ==========================================

    const isFormField = (target) => {
      if (!target) return false;

      const tagName = target.tagName?.toLowerCase();

      return (
        tagName === "input" ||
        tagName === "textarea" ||
        target.isContentEditable
      );
    };

    const handleContextMenu = (e) => {
      if (!isFormField(e.target)) {
        e.preventDefault();
      }
    };

    const handleClipboard = (e) => {
      if (!isFormField(e.target)) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleClipboard);
    document.addEventListener("paste", handleClipboard);
    document.addEventListener("cut", handleClipboard);

    // ==========================================
    // 4. CLEANUP
    // ==========================================

    return () => {
      lenis.off("scroll", handleScroll);

      document.removeEventListener(
        "contextmenu",
        handleContextMenu
      );

      document.removeEventListener(
        "copy",
        handleClipboard
      );

      document.removeEventListener(
        "paste",
        handleClipboard
      );

      document.removeEventListener(
        "cut",
        handleClipboard
      );

      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // ==========================================
  // SCROLL TO TOP HANDLER
  // ==========================================

  const handleScrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        // 1. CONTROL SCROLL SPEED.
        duration: 3.5,

        // 2. CONTROL TOP ANIMATION (SLOW EASE-OUT):
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    }
  };

  // ==========================================
  // WHATSAPP CONTACT US POPUP
  // ==========================================

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupWhatsAppClick = () => {
    setShowPopup(false);

    // Directly open WhatsApp instead of searching
    // for another WhatsApp button in the DOM.
    window.open(
      WHATSAPP_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Router>
      <SEO />

      <DesignNav />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route
            path="/services/ai-intelligent-automation"
            element={<AIIntelligentAutomation />}
          />

          <Route
            path="/services/custom-portal-development"
            element={<CustomPortalDevelopment />}
          />

          <Route
            path="/services/web-application-development"
            element={<WebApplicationDevelopment />}
          />

          <Route
            path="/services/ui-ux-product-design"
            element={<UIUXProductDesign />}
          />

          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />

          <Route
            path="/services/cyber-security"
            element={<CyberSecurity />}
          />

          <Route
            path="/startup-offer"
            element={<StartupOffer />}
          />

          <Route
            path="/thank-you"
            element={<ThankYou />}
          />
        </Routes>
      </PageTransition>

      <Footer />

      {/* ==========================================
          BACK TO TOP BUTTON
      ========================================== */}

      <button
        onClick={handleScrollToTop}
        className={`back-to-top-btn ${
          showBackToTop ? "visible" : ""
        }`}
      >
        <img src={arrowtopp} alt="arrow" />
      </button>

      {/* ==========================================
          WHATSAPP CONTACT US POPUP
      ========================================== */}

      <div
        className={`contact-popup-overlay ${
          showPopup ? "active" : ""
        }`}
      >
        <div className="contact-popup-box">

          <button
            className="popup-close-btn"
            onClick={() => setShowPopup(false)}
          >
            ×
          </button>

          <img src={logo} alt="" />

          <h3>Let's Build Something Great</h3>

          <p>
            Tell us about your project, and our team will help you find the right solution.
          </p>

          <button
            className="popup-cta-btn"
            onClick={handlePopupWhatsAppClick}
          >
            Chat With Our Experts

            <span className="support-img">
              <img src={support} alt="" />
            </span>
          </button>

        </div>
      </div>
    </Router>
  );
}

export default App;