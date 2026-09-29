import ServiceDetailPage from "./ServiceDetailPage";

const service = {
  title: "Web & Application Development",
  tag: "WEB • APPS • DIGITAL",

  description:
    "Create high-performance websites and web applications that deliver seamless experiences across every device.",

  overviewTitle: "Modern Digital Products That Perform",

  overview:
    "We design and develop websites and web applications that combine strong user experiences with scalable technical foundations.",

  features: [
    {
      title: "Corporate Websites",
      description:
        "Build professional websites designed to communicate your brand, services, and value proposition.",
    },
    {
      title: "Web Applications",
      description:
        "Develop custom web applications for business workflows, customers, teams, and digital products.",
    },
    {
      title: "E-Commerce",
      description:
        "Create commerce experiences designed around products, customers, payments, and business operations.",
    },
    {
      title: "Frontend & Backend",
      description:
        "Develop complete applications across user interfaces, APIs, databases, and backend systems.",
    },
    {
      title: "Progressive Web Apps",
      description:
        "Build fast web experiences with application-like functionality and accessibility across devices.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improve loading performance, responsiveness, usability, and overall technical efficiency.",
    },
  ],

  impact:
    "Build responsive digital platforms that improve usability, customer engagement, performance, and online conversions.",

  process: [
    {
      title: "Planning",
      description:
        "Define goals, users, functionality, content, and technical requirements.",
    },
    {
      title: "Design",
      description:
        "Translate requirements into intuitive and practical digital experiences.",
    },
    {
      title: "Development",
      description:
        "Build the frontend, backend, integrations, and supporting infrastructure.",
    },
    {
      title: "Launch & Improve",
      description:
        "Deploy the product, monitor performance, and continuously improve the experience.",
    },
  ],
};

export default function WebApplicationDevelopment() {
  return <ServiceDetailPage service={service} />;
}