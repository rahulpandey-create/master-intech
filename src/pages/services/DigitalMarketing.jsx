import ServiceDetailPage from "./ServiceDetailPage";

const service = {
  title: "Digital Marketing",
  tag: "SEO • SOCIAL MEDIA • PERFORMANCE",

  description:
    "Build a stronger digital presence with data-driven marketing strategies that attract the right audience, increase visibility, and turn traffic into measurable business growth.",

  overviewTitle: "Marketing Focused on Measurable Growth",

  overview:
    "We combine search, social, advertising, content, and analytics to create digital marketing campaigns that are aligned with business objectives and measurable outcomes.",

  features: [
    {
      title: "Search Engine Optimization",
      description:
        "Improve organic visibility and build a stronger search presence for relevant keywords and audiences.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build a consistent social presence and engage your audience across relevant platforms.",
    },
    {
      title: "Google & Meta Ads",
      description:
        "Create targeted advertising campaigns designed around traffic, leads, conversions, or other business goals.",
    },
    {
      title: "Content Marketing",
      description:
        "Develop useful content that supports search visibility, brand authority, and customer engagement.",
    },
    {
      title: "Lead Generation",
      description:
        "Build campaigns and landing experiences designed to attract and convert qualified prospects.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Measure campaign performance and identify opportunities using meaningful business metrics.",
    },
  ],

  impact:
    "Increase online visibility, reach high-intent customers, generate qualified leads, and improve marketing performance through measurable campaigns.",

  process: [
    {
      title: "Audit",
      description:
        "Review your current digital presence, audience, competitors, and marketing performance.",
    },
    {
      title: "Strategy",
      description:
        "Build a channel and campaign strategy around your business objectives.",
    },
    {
      title: "Execution",
      description:
        "Launch SEO, content, social, advertising, and lead-generation activities.",
    },
    {
      title: "Optimization",
      description:
        "Analyze results and continuously improve campaigns based on performance data.",
    },
  ],
};

export default function DigitalMarketing() {
  return <ServiceDetailPage service={service} />;
}