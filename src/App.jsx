import { useEffect, useState } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PortfolioBento from "./pages/Portfolio.jsx";
import Home from "./pages/Home";
import Services from "./pages/Services";

import DesignNav from "./components/home/designNav.jsx";
import Footer from "./components/home/Footer.jsx";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // ==========================================
    // 1. LENIS SMOOTH SCROLL
    // ==========================================

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      syncTouch: true,
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    // ==========================================
    // 2. SCROLL LISTENER
    // ==========================================

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

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
      window.removeEventListener("scroll", handleScroll);

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
    };
  }, []);

  return (
    <Router>
      <DesignNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioBento />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;