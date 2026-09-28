import ServiceDetailPage from "./ServiceDetailPage";

const service = {
  title: "AI & Intelligent Automation",
  tag: "AI • AUTOMATION • AGENTS",

  description:
    "Build AI-powered workflows, intelligent assistants, automation systems, and agentic solutions that reduce repetitive work and accelerate business decision-making.",

  overviewTitle: "AI Solutions Built Around Your Business",

  overview:
    "We help businesses identify high-value automation opportunities and turn them into practical AI solutions. From intelligent assistants to automated workflows, our approach focuses on measurable operational improvements.",

  features: [
    {
      title: "AI Strategy & Consulting",
      description:
        "Identify practical AI opportunities and define an implementation roadmap aligned with business goals.",
    },
    {
      title: "AI Agents",
      description:
        "Build intelligent agents that can handle repetitive tasks, information retrieval, and business workflows.",
    },
    {
      title: "Business Automation",
      description:
        "Automate repetitive processes and connect systems to reduce manual operational effort.",
    },
    {
      title: "Generative AI",
      description:
        "Use modern generative AI capabilities for content, knowledge systems, assistants, and workflows.",
    },
    {
      title: "AI Integrations",
      description:
        "Connect AI functionality with your existing applications, platforms, and business systems.",
    },
    {
      title: "Data & Insights",
      description:
        "Turn operational data into useful insights that support faster and more informed decisions.",
    },
  ],

  impact:
    "Automate repetitive operations, reduce manual effort, improve response times, and help teams make faster data-driven decisions.",

  process: [
    {
      title: "Discovery",
      description:
        "Understand your workflows, challenges, and opportunities for automation.",
    },
    {
      title: "Strategy",
      description:
        "Define the right AI approach, architecture, and implementation roadmap.",
    },
    {
      title: "Build",
      description:
        "Develop and integrate the AI solution into your existing technology environment.",
    },
    {
      title: "Optimize",
      description:
        "Measure results, improve workflows, and scale the solution as your needs grow.",
    },
  ],
};

export default function AIIntelligentAutomation() {
  return <ServiceDetailPage service={service} />;
}