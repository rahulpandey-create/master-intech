import ServiceDetailPage from "./ServiceDetailPage";

const service = {
  title: "Custom Portal Development",
  tag: "PORTALS • DASHBOARDS • BUSINESS SYSTEMS",

  description:
    "Build secure, scalable custom portals designed to connect teams, customers, partners, and business operations through one seamless digital platform.",

  overviewTitle: "Software Designed Around Your Operations",

  overview:
    "We build custom portals that bring business workflows, users, data, and internal processes together in a secure and scalable environment.",

  features: [
    {
      title: "Customer Portals",
      description:
        "Give customers secure access to information, services, documents, and self-service functionality.",
    },
    {
      title: "Partner Portals",
      description:
        "Create centralized platforms for partner communication, collaboration, and operations.",
    },
    {
      title: "Employee Portals",
      description:
        "Build internal systems that simplify employee workflows, resources, and business processes.",
    },
    {
      title: "Admin Dashboards",
      description:
        "Provide teams with centralized dashboards for managing users, data, workflows, and operations.",
    },
    {
      title: "Self-Service Platforms",
      description:
        "Reduce manual support requirements by giving users access to useful self-service features.",
    },
    {
      title: "Role-Based Access",
      description:
        "Control access to features and information based on user roles and business requirements.",
    },
  ],

  impact:
    "Replace disconnected tools and manual workflows with a centralized software platform built around the way your business operates.",

  process: [
    {
      title: "Requirements",
      description:
        "Map users, workflows, permissions, integrations, and business requirements.",
    },
    {
      title: "Architecture",
      description:
        "Design the application structure, database, authentication, and system architecture.",
    },
    {
      title: "Development",
      description:
        "Build the portal, dashboards, workflows, and integrations.",
    },
    {
      title: "Deployment",
      description:
        "Deploy the system securely and prepare it for ongoing growth and maintenance.",
    },
  ],
};

export default function CustomPortalDevelopment() {
  return <ServiceDetailPage service={service} />;
}