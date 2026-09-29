import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://masterintechsolutions.com";

const seoData = {
  "/": {
    title: "AI & Web Solutions | Master Intech",
    description:
      "Master Intech builds AI-powered solutions, web applications, automation systems and digital experiences for modern businesses.",
  },

  "/portfolio": {
    title: "Portfolio | Master Intech",
    description:
      "Explore websites, web applications, AI solutions and digital products built by Master Intech.",
  },

  "/services": {
    title: "AI & Web Development Services | Master Intech",
    description:
      "Explore AI automation, web development, custom portal, UI/UX, cybersecurity and digital marketing services by Master Intech.",
  },

  "/services/ai-intelligent-automation": {
    title: "AI Automation Services | Master Intech",
    description:
      "Build intelligent AI automation systems that streamline workflows, improve efficiency and help businesses scale.",
  },

  "/services/custom-portal-development": {
    title: "Custom Portal Development | Master Intech",
    description:
      "Build secure and scalable custom portals tailored to your business workflows, users and operational needs.",
  },

  "/services/web-application-development": {
    title: "Web Application Development | Master Intech",
    description:
      "Build scalable, high-performance web applications tailored to your business requirements and users.",
  },

  "/services/ui-ux-product-design": {
    title: "UI/UX Product Design | Master Intech",
    description:
      "Create intuitive UI/UX designs and digital product experiences focused on usability and business goals.",
  },

  "/services/digital-marketing": {
    title: "Digital Marketing Services | Master Intech",
    description:
      "Grow your online presence with digital marketing strategies designed to reach, engage and convert your target audience.",
  },

  "/services/cyber-security": {
    title: "Cyber Security Services | Master Intech",
    description:
      "Strengthen your digital environment with cybersecurity assessment, vulnerability management, application security and proactive protection.",
  },

  "/startup-offer": {
    title: "Startup Solutions | Master Intech",
    description:
      "Explore technology and digital solutions designed to help startups build, launch and scale.",
  },

  "/thank-you": {
    title: "Thank You | Master Intech",
    description:
      "Thank you for contacting Master Intech. We look forward to discussing your project.",
  },
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const currentSEO = seoData[location.pathname] || {
      title: "Master Intech Solutions",
      description:
        "Master Intech provides AI, software development, automation and digital solutions for modern businesses.",
    };

    // PAGE TITLE
    document.title = currentSEO.title;

    // META DESCRIPTION
    let metaDescription = document.head.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      currentSEO.description
    );

    // CANONICAL URL
    const canonicalUrl =
      location.pathname === "/"
        ? BASE_URL
        : `${BASE_URL}${location.pathname}`;

    let canonicalLink = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
};

export default SEO;