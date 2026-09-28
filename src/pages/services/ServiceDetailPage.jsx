import { Link, useLocation } from "react-router-dom";

const breadcrumbLabels = {
  services: "Services",
  "ai-intelligent-automation": "AI & Intelligent Automation",
  "custom-portal-development": "Custom Portal Development",
  "web-application-development": "Web & Application Development",
  "ui-ux-product-design": "UI/UX & Product Design",
  "digital-marketing": "Digital Marketing",
  portfolio: "Portfolio",
  "startup-offer": "Startup Offer",
};

export default function Breadcrumbs() {
  const location = useLocation();

  const segments = location.pathname
    .split("/")
    .filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        {segments.map((segment, index) => {
          const path = `/${segments
            .slice(0, index + 1)
            .join("/")}`;

          const isLast = index === segments.length - 1;

          const label =
            breadcrumbLabels[segment] ||
            segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={path}>
              <span aria-hidden="true">/</span>

              {isLast ? (
                <span aria-current="page">{label}</span>
              ) : (
                <Link to={path}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}