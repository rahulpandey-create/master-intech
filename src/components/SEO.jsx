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
    title: "Web Development Company | Master Intech Solutions",
    description:
      "Master Intech builds AI-powered solutions, web applications, automation systems and digital experiences for modern businesses.",
    keywords: [
      "Web Development Company",
      "Web Design Company",
      "IT Solutions Company",
      "Web Development Services",
      "Website Design Services",
      "Website Development Company",
      "Professional Web Design Company",
      "Custom Website Development",
      "Web Development Company India",
      "Web Design Company India",
      "IT Services Company India",
      "Web Development Company Chandigarh",
      "Web Development Company Mohali",
      "Web Design Company Chandigarh",
      "AI Automation Services",
      "Digital Marketing Services",
    ],
  },

  "/portfolio": {
    title: "Portfolio | Master Intech",
    description:
      "Explore websites, web applications, AI solutions and digital products built by Master Intech.",
    keywords: [
      "Web Development Company",
      "Web Design Company",
      "Custom Website Development",
      "Website Development Company",
      "Web Development Services",
      "AI Automation",
      "Digital Marketing",
    ],
  },

  "/services": {
    title: "IT Solutions & SEO Services | Master Intech",
    description:
      "Explore AI automation, web development, custom portal, UI/UX, cybersecurity and digital marketing services by Master Intech.",
    keywords: [
      "Web Development Services",
      "Web Development Company",
      "Web Design Company",
      "IT Solutions Company",
      "Website Design Services",
      "AI Automation Services",
      "Digital Marketing Services",
      "SEO Services",
      "Custom Website Development",
      "E-commerce Development Company",
      "Application Development",
    ],
  },

  "/services/ai-intelligent-automation": {
    title: "AI Automation Services | Master Intech",
    description:
      "Build intelligent AI automation systems that streamline workflows, improve efficiency and help businesses scale.",
    keywords: [
      "AI Automation Services",
      "AI Automation",
      "AI Solutions",
      "Business Automation",
      "Intelligent Automation",
    ],
  },

  "/services/custom-portal-development": {
    title: "Custom Portal Development | Master Intech",
    description:
      "Build secure and scalable custom portals tailored to your business workflows, users and operational needs.",
    keywords: [
      "Custom Portal Development",
      "Custom Portal Development Services",
      "Web Development Services",
      "Custom Website Development",
      "Business Portal Development",
      "Web Application Development",
    ],
  },

  "/services/web-application-development": {
    title: "Web Application Development | Master Intech",
    description:
      "Build scalable, high-performance web applications tailored to your business requirements and users.",
    keywords: [
      "Web Development Company",
      "Web Development Services",
      "Website Development Company",
      "Custom Website Development",
      "Web Application Development",
      "Website Design Services",
      "E-commerce Website Development",
      "E-commerce Development Company",
      "Website Redesign Services",
      "Shopify Development Company",
      "Shopify Development Company India",
      "WordPress Development Company",
      "Web Development Company India",
      "Web Development Company Chandigarh",
      "Web Development Company Mohali",
    ],
  },

  "/services/ui-ux-product-design": {
    title: "UI/UX Product Design | Master Intech",
    description:
      "Create intuitive UI/UX designs and digital product experiences focused on usability and business goals.",
    keywords: [
      "Web Design Company",
      "Website Design Services",
      "Professional Web Design Company",
      "UI/UX Design Services",
      "Product Design Services",
      "Web Design Company India",
      "Web Design Company Chandigarh",
    ],
  },

  "/services/digital-marketing": {
    title: "Digital Marketing Services | Master Intech",
    description:
      "Grow your online presence with digital marketing strategies designed to reach, engage and convert your target audience.",
    keywords: [
      "Digital Marketing Services",
      "Digital Marketing",
      "SEO Services",
      "Search Engine Optimization Services",
    ],
  },

  "/services/cyber-security": {
    title: "Cyber Security Services | Master Intech",
    description:
      "Strengthen your digital environment with cybersecurity assessment, vulnerability management, application security and proactive protection.",
    keywords: [
      "Cyber Security Services",
      "Cybersecurity Solutions",
      "Application Security",
      "Vulnerability Management",
      "Network Security",
      "IT Security Services",
    ],
  },

  "/startup-offer": {
    title: "Startup Solutions | Master Intech",
    description:
      "Explore technology and digital solutions designed to help startups build, launch and scale.",
    keywords: [
      "Startup Solutions",
      "Startup Technology Solutions",
      "Web Development Services",
      "Custom Website Development",
      "AI Automation Services",
      "Digital Solutions for Startups",
    ],
  },

  "/contact-us": {
    title: "Contact Master Intech | Web Design Company",
    description:
      "Get in touch with Master Intech for AI solutions, web development, automation, UI/UX, digital marketing and cybersecurity services.",
    keywords: [
      "Web Development Company",
      "Web Design Company",
      "IT Solutions Company",
      "Web Development Services",
      "AI Automation Services",
      "Digital Marketing Services",
      "SEO Services",
      "IT Services Company India",
      "Web Development Company India",
      "Web Development Company Chandigarh",
      "Web Development Company Mohali",
    ],
  },

  "/thank-you": {
    title: "Thank You | Master Intech",
    description:
      "Thank you for contacting Master Intech. We look forward to discussing your project.",
    keywords: [],
  },
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const currentSEO = seoData[location.pathname] || {
      title: "Master Intech Solutions",
      description:
        "Master Intech provides AI, software development, automation and digital solutions for modern businesses.",
      keywords: [
        "Web Development Company",
        "Web Design Company",
        "IT Solutions Company",
        "Web Development Services",
      ],
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
    // META KEYWORDS
    // ==========================================

    let metaKeywords = document.head.querySelector(
      'meta[name="keywords"]'
    );

    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.setAttribute(
      "content",
      currentSEO.keywords.join(", ")
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
      "/contact-us": "Contact Us",
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

    // ==========================================
    // CONTACT PAGE SCHEMA
    // ==========================================

    let contactPageSchemaScript = document.head.querySelector(
      'script[data-seo-schema="contact-page"]'
    );

    if (location.pathname === "/contact-us") {
      const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: currentSEO.title,
        description: currentSEO.description,
        url: canonicalUrl,
        isPartOf: {
          "@type": "WebSite",
          name: "Master Intech Solutions",
          url: BASE_URL,
        },
      };

      if (!contactPageSchemaScript) {
        contactPageSchemaScript = document.createElement("script");
        contactPageSchemaScript.setAttribute(
          "type",
          "application/ld+json"
        );
        contactPageSchemaScript.setAttribute(
          "data-seo-schema",
          "contact-page"
        );
        document.head.appendChild(contactPageSchemaScript);
      }

      contactPageSchemaScript.textContent =
        JSON.stringify(contactPageSchema);
    } else if (contactPageSchemaScript) {
      contactPageSchemaScript.remove();
    }

    // ==========================================
    // CONTACT PAGE FAQ SCHEMA
    // ==========================================

    let faqSchemaScript = document.head.querySelector(
      'script[data-seo-schema="faq"]'
    );

    if (location.pathname === "/contact-us") {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What information should I include in my enquiry?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Share what you are trying to build or improve, the service you are considering, your main requirements, and any useful project context. A rough budget is optional.",
            },
          },
          {
            "@type": "Question",
            name: "How does the consultation process work?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Start by submitting the enquiry form with the available project context. The team can then review the requirement and continue the discussion using the contact details you provide.",
            },
          },
          {
            "@type": "Question",
            name: "What types of projects does Master Intech work on?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The current service offering covers AI and intelligent automation, custom portals, web and application development, UI/UX and product design, digital marketing, and cybersecurity.",
            },
          },
          {
            "@type": "Question",
            name: "Can you work with an existing product or codebase?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Include the current product, codebase or technical situation in your requirement so the team can understand the existing context.",
            },
          },
          {
            "@type": "Question",
            name: "How can I request a project estimate?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Describe the project scope and requirements in the form and include a budget range if you have one. This gives the team useful context for the next discussion.",
            },
          },
        ],
      };

      if (!faqSchemaScript) {
        faqSchemaScript = document.createElement("script");
        faqSchemaScript.setAttribute(
          "type",
          "application/ld+json"
        );
        faqSchemaScript.setAttribute(
          "data-seo-schema",
          "faq"
        );
        document.head.appendChild(faqSchemaScript);
      }

      faqSchemaScript.textContent =
        JSON.stringify(faqSchema);
    } else if (faqSchemaScript) {
      faqSchemaScript.remove();
    }
  }, [location.pathname]);

  return null;
};

export default SEO;