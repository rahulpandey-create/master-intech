import logo from "../../assets/logomaster.svg";
import { Link } from "react-router-dom";

export default function DesignNav({ menuOpen, setMenuOpen }) {
  const isHome = window.location.pathname === "/";

  const handleSectionLink = (event, sectionId) => {
    if (!isHome) return;

    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="design-nav" aria-label="Main navigation">
      <div className={`design-nav-links ${menuOpen ? "open" : ""}`}>
        <a
          href="/"
          onClick={(event) => handleSectionLink(event, "hero")}
        >
          HOME
        </a>

        <a
          href="/"
          onClick={(event) => handleSectionLink(event, "about")}
        >
          ABOUT
        </a>

        <a
          href="/"
          onClick={(event) => handleSectionLink(event, "services")}
        >
          SERVICES
        </a>

        <Link to="/portfolio">PORTFOLIO</Link>
      </div>

      <Link
        to="/"
        className="design-logo"
        aria-label="Master Intech Solutions home"
        onClick={() => setMenuOpen(false)}
      >
        <img src={logo} alt="Master Intech Solutions" />
      </Link>

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
          onClick={(event) => handleSectionLink(event, "contact")}
        >
          CONTACT
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}