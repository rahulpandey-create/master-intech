import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "AI & Web Solutions | Master Intech",
  "/portfolio": "Portfolio | Master Intech",
  "/services": "AI & Web Development Services",
  "/startup-offer": "Startup Solutions | Master Intech",
  "/thankyou": "Thank You | Master Intech",

  "/services/ai-intelligent-automation": "AI Automation Services",
  "/services/custom-portal-development": "Custom Portal Development",
  "/services/digital-marketing": "Digital Marketing Services",
  "/services/ui-ux-product-design": "UI/UX Product Design",
  "/services/web-application-development": "Web Application Development",
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      titles[location.pathname] || "Master Intech Solutions";
  }, [location.pathname]);

  return null;
};

export default SEO;