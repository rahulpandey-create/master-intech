import { useState } from "react";
import logo from "../../assets/logomaster.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function DesignNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionLink = (event, sectionId) => {
    event.preventDefault();
    closeMenu();

    // Already on Home
    if (isHome) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Navigate to Home using React Router — no page refresh
    navigate("/");

    // Wait for Home to render, then scroll to the section
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  };

  return (
    <nav className="design-nav" aria-label="Main navigation">

      {/* NAV LINKS */}
      <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <Link
          to="/"
          onClick={(event) =>
            handleSectionLink(event, "about")
          }
        >
          ABOUT
        </Link>

        <Link to="/services" onClick={closeMenu}>
          SERVICES
        </Link>

        <Link to="/portfolio" onClick={closeMenu}>
          PORTFOLIO
        </Link>

      </div>

      {/* LOGO */}
      <Link
        to="/"
        className="design-logo"
        aria-label="Master Intech Solutions home"
        onClick={closeMenu}
      >
        <img
          src={logo}
          alt="Master Intech Solutions"
        />
      </Link>

      {/* ACTIONS */}
      <div className="design-nav-actions">

        <a
          className="hire"
          href="https://www.upwork.com/freelancers/~01e7473140f1676ff9"
          target="_blank"
          rel="noreferrer"
        >
          HIRE US
        </a>

        <Link to="/contact-us" onClick={closeMenu}>
          CONTACT
        </Link>

        {/* HAMBURGER */}
        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}