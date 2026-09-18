import { useMemo, useState } from "react";
import DesignNav from "../components/home/designNav";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Radiant Skincare",
    category: "Branding",
    type: "Branding",
    description:
      "A refined identity and digital storefront created for a modern skincare brand.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    title: "Apex Clothing Co.",
    category: "Web Design",
    type: "Web Design",
    description:
      "A clean e-commerce experience focused on product discovery and conversion.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    title: "Vero Mobile App",
    category: "Development",
    type: "Development",
    description:
      "A product-led mobile experience designed around a simple, fast user journey.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    title: "Stoyo",
    category: "Branding",
    type: "Branding",
    description:
      "Visual identity and packaging direction built to give the brand a distinct voice.",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    title: "Timeless Impressions",
    category: "Web Design",
    type: "Web Design",
    description:
      "A portfolio-led website redesign with a sharper visual system and stronger hierarchy.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    title: "Digital Growth Platform",
    category: "Support",
    type: "Support",
    description:
      "Ongoing design, development, optimisation, and support for a growing digital product.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
  },
];

const categories = [
  "All",
  "Web Design",
  "Branding",
  "Development",
  "Support",
];

export default function PortfolioBento() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter(
            (project) => project.category === activeCategory
          ),
    [activeCategory]
  );

  return (
    <div className="portfolio-page">
      {/* <DesignNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}

      <div className="portfolio-content">
        <h1>Portfolio</h1>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}