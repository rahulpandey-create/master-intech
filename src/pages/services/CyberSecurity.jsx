import ServiceDetailPage from "./ServiceDetailPage";

const service = {
  title: "Cyber Security",
  tag: "SECURITY • RISK • PROTECTION",

  description:
    "Strengthen your digital environment with security-focused architecture, monitoring, risk management, and proactive protection designed to keep your systems, applications, and data secure.",

  overviewTitle: "Security Built Into Your Digital Foundation",

  overview:
    "We help businesses identify security weaknesses, reduce digital risk, and build stronger protection across applications, infrastructure, networks, identities, and business systems.",

  features: [
    {
      title: "Security Assessment",
      description:
        "Evaluate applications, infrastructure, systems, and processes to identify security gaps and areas of improvement.",
    },
    {
      title: "Vulnerability Management",
      description:
        "Identify, prioritize, and address vulnerabilities before they become serious security risks.",
    },
    {
      title: "Application Security",
      description:
        "Build security into web applications and software through secure development practices and security testing.",
    },
    {
      title: "Network Security",
      description:
        "Strengthen network environments through access controls, secure configurations, monitoring, and threat protection.",
    },
    {
      title: "Identity & Access",
      description:
        "Protect systems and data by implementing appropriate authentication, authorization, and access-control practices.",
    },
    {
      title: "Risk & Compliance",
      description:
        "Identify technology risks and support security processes aligned with relevant business and compliance requirements.",
    },
  ],

  impact:
    "Identify vulnerabilities earlier, reduce security risks, protect critical systems and data, and build security into your technology foundation.",

  process: [
    {
      title: "Assess",
      description:
        "Review your existing systems, applications, infrastructure, access controls, and security practices.",
    },
    {
      title: "Identify Risks",
      description:
        "Discover vulnerabilities, weaknesses, and potential security risks across your digital environment.",
    },
    {
      title: "Protect",
      description:
        "Implement security improvements, controls, and protective measures based on identified risks.",
    },
    {
      title: "Monitor & Improve",
      description:
        "Continuously review your security posture and improve protection as your technology environment evolves.",
    },
  ],
};

export default function CyberSecurity() {
  return <ServiceDetailPage service={service} />;
}