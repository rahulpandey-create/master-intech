import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://masterintechsolutions.com";

const serviceSchemaData = {
  "/services/ai-intelligent-automation": {
    name: "AI & Intelligent Automation",
    description:
      "Build intelligent AI automation systems that streamline workflows, improve efficiency and help businesses scale.",
  },

  "/services/custom-portal-development": {
    name: "Custom Portal Development",
    description:
      "Build secure and scalable custom portals tailored to your business workflows, users and operational needs.",
  },

  "/services/web-application-development": {
    name: "Web & Application Development",
    description:
      "Build scalable, high-performance web applications tailored to your business requirements and users.",
  },

  "/services/ui-ux-product-design": {
    name: "UI/UX & Product Design",
    description:
      "Create intuitive UI/UX designs and digital product experiences focused on usability and business goals.",
  },

  "/services/digital-marketing": {
    name: "Digital Marketing",
    description:
      "Grow your online presence with digital marketing strategies designed to reach, engage and convert your target audience.",
  },

  "/services/cyber-security": {
    name: "Cyber Security",
    description:
      "Strengthen your digital environment with cybersecurity assessment, vulnerability management, application security and proactive protection.",
  },
};

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

    // ==========================================
    // PAGE TITLE
    // ==========================================

    document.title = currentSEO.title;

    // ==========================================
    // META DESCRIPTION
    // ==========================================

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

    // ==========================================
    // CANONICAL URL
    // ==========================================

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

    // ==========================================
    // OPEN GRAPH
    // ==========================================

    const ogTags = {
      "og:title": currentSEO.title,
      "og:description": currentSEO.description,
      "og:url": canonicalUrl,
      "og:type": "website",
      "og:image": `${BASE_URL}/og-image.jpg`,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.head.querySelector(
        `meta[property="${property}"]`
      );

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    });

    // ==========================================
    // TWITTER / X
    // ==========================================

    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": currentSEO.title,
      "twitter:description": currentSEO.description,
      "twitter:image": `${BASE_URL}/og-image.jpg`,
    };

    // ==========================================
    // ORGANIZATION SCHEMA
    // ==========================================

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Master Intech Solutions",
      url: BASE_URL,
      logo: `${BASE_URL}/og-image.jpg`,
    };

    let organizationSchemaScript = document.head.querySelector(
      'script[data-seo-schema="organization"]'
    );

    if (!organizationSchemaScript) {
      organizationSchemaScript = document.createElement("script");
      organizationSchemaScript.setAttribute(
        "type",
        "application/ld+json"
      );
      organizationSchemaScript.setAttribute(
        "data-seo-schema",
        "organization"
      );
      document.head.appendChild(organizationSchemaScript);
    }

    organizationSchemaScript.textContent =
      JSON.stringify(organizationSchema);

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.head.querySelector(
        `meta[name="${name}"]`
      );

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    });
    // ==========================================
    // SERVICE SCHEMA
    // ==========================================

    const currentService =
      serviceSchemaData[location.pathname];

    let serviceSchemaScript = document.head.querySelector(
      'script[data-seo-schema="service"]'
    );

    if (currentService) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: currentService.name,
        description: currentService.description,
        url: canonicalUrl,
        provider: {
          "@type": "Organization",
          name: "Master Intech Solutions",
          url: BASE_URL,
        },
      };

      if (!serviceSchemaScript) {
        serviceSchemaScript = document.createElement("script");
        serviceSchemaScript.setAttribute(
          "type",
          "application/ld+json"
        );
        serviceSchemaScript.setAttribute(
          "data-seo-schema",
          "service"
        );
        document.head.appendChild(serviceSchemaScript);
      }

      serviceSchemaScript.textContent =
        JSON.stringify(serviceSchema);
    } else if (serviceSchemaScript) {
      serviceSchemaScript.remove();
    }
    // ==========================================
    // BREADCRUMB SCHEMA
    // ==========================================

    const breadcrumbLabels = {
      "/": "Home",
      "/portfolio": "Portfolio",
      "/services": "Services",
      "/services/ai-intelligent-automation":
        "AI & Intelligent Automation",
      "/services/custom-portal-development":
        "Custom Portal Development",
      "/services/web-application-development":
        "Web & Application Development",
      "/services/ui-ux-product-design":
        "UI/UX & Product Design",
      "/services/digital-marketing":
        "Digital Marketing",
      "/services/cyber-security":
        "Cyber Security",
      "/startup-offer": "Startup Solutions",
    };

    let breadcrumbSchemaScript = document.head.querySelector(
      'script[data-seo-schema="breadcrumb"]'
    );

    if (breadcrumbLabels[location.pathname]) {
      const breadcrumbItems = [];

      breadcrumbItems.push({
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      });

      if (location.pathname.startsWith("/services/")) {
        breadcrumbItems.push({
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE_URL}/services`,
        });

        breadcrumbItems.push({
          "@type": "ListItem",
          position: 3,
          name: breadcrumbLabels[location.pathname],
          item: canonicalUrl,
        });
      } else if (location.pathname !== "/") {
        breadcrumbItems.push({
          "@type": "ListItem",
          position: 2,
          name: breadcrumbLabels[location.pathname],
          item: canonicalUrl,
        });
      }

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems,
      };

      if (!breadcrumbSchemaScript) {
        breadcrumbSchemaScript = document.createElement(
          "script"
        );
        breadcrumbSchemaScript.setAttribute(
          "type",
          "application/ld+json"
        );
        breadcrumbSchemaScript.setAttribute(
          "data-seo-schema",
          "breadcrumb"
        );
        document.head.appendChild(breadcrumbSchemaScript);
      }

      breadcrumbSchemaScript.textContent =
        JSON.stringify(breadcrumbSchema);
    } else if (breadcrumbSchemaScript) {
      breadcrumbSchemaScript.remove();
    }
  }, [location.pathname]);

  return null;
};

export default SEO;