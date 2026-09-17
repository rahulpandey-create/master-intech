import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Routes, Route, useLocation } from "react-router-dom"; 
import PortfolioBento from './pages/Portfolio.jsx';
import Home from "./pages/Home";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      syncTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Scroll Listener
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    // 3. Content Protection (Ignores form fields)
    const isFormField = (target) => {
      const tagName = target.tagName.toLowerCase();
      return tagName === 'input' || tagName === 'textarea' || target.isContentEditable;
    };

    const handleContextMenu = (e) => {
      // Allow right-click menu only on form inputs
      if (!isFormField(e.target)) e.preventDefault();
    };

    const handleClipboard = (e) => {
      // Allow copy, paste, and cut only inside form inputs
      if (!isFormField(e.target)) e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleClipboard);
    document.addEventListener('paste', handleClipboard);
    document.addEventListener('cut', handleClipboard);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
      
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleClipboard);
      document.removeEventListener('paste', handleClipboard);
      document.removeEventListener('cut', handleClipboard);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/portfolio" element={<PortfolioBento />} />
    </Routes>
  );
}

export default App;