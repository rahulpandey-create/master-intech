import { useState } from "react";
import logo from "../../assets/logomaster.svg";
import { Link } from "react-router-dom";

export default function DesignNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = window.location.pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionLink = (event, sectionId) => {
    if (!isHome) return;

    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  return (
    <nav className="design-nav" aria-label="Main navigation">

      {/* NAV LINKS */}
      <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <a
          href="/"
          onClick={(event) =>
            handleSectionLink(event, "about")
          }
        >
          ABOUT
        </a>

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

        <a
          href="/"
          onClick={(event) =>
            handleSectionLink(event, "contact")
          }
        >
          CONTACT
        </a>

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