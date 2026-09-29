import ServiceDetailPage from "./ServiceDetailPage";

const service = {
  title: "UI/UX & Product Design",
  tag: "UX • UI • PRODUCT",

  description:
    "Turn complex products into intuitive digital experiences through research-driven UX and modern interface design.",

  overviewTitle: "Design Experiences People Understand",

  overview:
    "We simplify complex digital products by combining user research, structured information architecture, interaction design, and modern interfaces.",

  features: [
    {
      title: "UX Research",
      description:
        "Understand users, their needs, behaviors, and problems before designing the experience.",
    },
    {
      title: "User Journey Mapping",
      description:
        "Map important user interactions and identify opportunities to improve the overall experience.",
    },
    {
      title: "Wireframing",
      description:
        "Create clear structural layouts that define functionality and content hierarchy.",
    },
    {
      title: "UI Design",
      description:
        "Create modern interfaces that balance visual quality, usability, and consistency.",
    },
    {
      title: "Design Systems",
      description:
        "Establish reusable components and patterns to maintain consistency across products.",
    },
    {
      title: "Prototyping",
      description:
        "Create interactive prototypes to validate ideas and workflows before development.",
    },
  ],

  impact:
    "Create simpler, more intuitive products that improve usability, engagement, consistency, and customer satisfaction.",

  process: [
    {
      title: "Research",
      description:
        "Understand the product, users, business goals, and existing experience.",
    },
    {
      title: "Structure",
      description:
        "Define information architecture, user flows, and key product interactions.",
    },
    {
      title: "Design",
      description:
        "Develop wireframes, interfaces, components, and responsive experiences.",
    },
    {
      title: "Validate",
      description:
        "Use prototypes and feedback to refine the product experience before development.",
    },
  ],
};

export default function UIUXProductDesign() {
  return <ServiceDetailPage service={service} />;
}