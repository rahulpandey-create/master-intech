import { useEffect, useState, useRef } from "react"; // Added useRef
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PortfolioBento from "./pages/Portfolio.jsx";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PageTransition from "./components/home/PageTransition";
import DesignNav from "./components/home/designNav.jsx";
import Footer from "./components/home/Footer.jsx";
import question from "./assets/question.gif"
const WHATSAPP_LINK = "https://wa.me/919878263393";
import arrowtopp from "./assets/arrowtopp.svg";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenisRef = useRef(null); // Ref to hold the Lenis instance

  useEffect(() => {
    // ==========================================
    // 1. LENIS SMOOTH SCROLL
    // ==========================================

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      syncTouch: true,
    });

    lenisRef.current = lenis; // Assign instance to ref

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
      setShowBackToTop(e.scroll > 500); // Tracks scroll position from Lenis event
    };

    lenis.on("scroll", handleScroll); // Listen to Lenis instead of window

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
      lenis.off("scroll", handleScroll); // Clean up Lenis listener

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
        duration: 2.5,

        // 2. CONTROL TOP ANIMATION (SLOW EASE-OUT):
        easing: (t) => 1 - Math.pow(1 - t, 5) // This creates a slow ease-out effect increase the last number to make it slower, decrease to make it faster
      });
    }
  };

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 6000); // 6000 milliseconds = 6 seconds

    return () => clearTimeout(timer); // Clean up the timer if the user leaves the page early
  }, []);

  // 3. Add this handler function to link the popup to your existing WhatsApp button
  const handlePopupWhatsAppClick = () => {
    setShowPopup(false); // Hide the popup

    // Find your existing WhatsApp button and trigger its click event
    // Replace '.whatsapp-btn-class' with the actual class name, ID, or tag of your working button
    const existingWhatsAppBtn = document.querySelector(`a[href="${WHATSAPP_LINK}"]`);
    if (existingWhatsAppBtn) {
      existingWhatsAppBtn.click();
    }
  };

  return (
    <Router>
      <DesignNav />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioBento />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </PageTransition>
      <Footer />

      {/* Unstyled button toggled by the conditional state */}
      <button
        onClick={handleScrollToTop}
        className={`back-to-top-btn ${showBackToTop ? "visible" : ""}`}
      >
       <img src={arrowtopp} alt="arrow" />
      </button>

      {/* ==========================================
    WHATSAPP CONTACT US POPUP
   ========================================== */}
      <div className={`contact-popup-overlay ${showPopup ? "active" : ""}`}>
        <div className="contact-popup-box">
          <button className="popup-close-btn" onClick={() => setShowPopup(false)}>×</button>
          <img src={question} alt=""></img>
          <h3>Have any questions?</h3>
          <p>Chat with us live on WhatsApp for instant assistance!</p>
          <button className="popup-cta-btn" onClick={handlePopupWhatsAppClick}>
            Talk to Our Experts
          </button>
        </div>
      </div>

    </Router>
  );
}

export default App;