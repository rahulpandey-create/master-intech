

const technologies = [
  {
    number: "01",
    title: "AI & Data",
    description:
      "Intelligent systems that turn data into meaningful business outcomes.",
    tags: [
      "Generative AI",
      "LLMs",
      "AI Agents",
      "Machine Learning",
      "Data Engineering",
    ],
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable infrastructure built for modern digital operations.",
    tags: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "DevOps",
      "Cloud Architecture",
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Modern frameworks and APIs powering high-performance digital products.",
    tags: ["React", "Next.js", "Node.js", "Python", "Laravel", "APIs"],
  },
  {
    number: "04",
    title: "Design & Experience",
    description:
      "Human-centered design systems that create intuitive digital experiences.",
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
  },
];

function Technology() {
  return (
    <section className="mi-technology">
      <div className="mi-technology-bg" />

      <div className="mi-technology-container">

        {/* HEADER */}
        <div className="mi-technology-header">
          <div className="mi-technology-label">
            <span />
            TECHNOLOGY ECOSYSTEM
          </div>

          <h2>
            POWERED BY
            <br />
            <strong>MODERN TECHNOLOGY</strong>
          </h2>

          <p>
            We work across a modern technology ecosystem to build flexible,
            secure, and future-ready digital solutions.
          </p>
        </div>

        {/* TECHNOLOGY GRID */}
        <div className="mi-technology-grid">
          {technologies.map((technology) => (
            <article
              className="mi-technology-card"
              key={technology.number}
            >
              <div className="mi-technology-card-head">
                <span className="mi-technology-number">
                  {technology.number}
                </span>

                <span className="mi-technology-arrow">
                  ↗
                </span>
              </div>

              <div className="mi-technology-content">
                <h3>{technology.title}</h3>

                <p>{technology.description}</p>

                <div className="mi-technology-tags">
                  {technology.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mi-technology-glow" />
            </article>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <div className="mi-technology-bottom">
          <span>AI</span>
          <i />
          <span>CLOUD</span>
          <i />
          <span>SOFTWARE</span>
          <i />
          <span>AUTOMATION</span>
          <i />
          <span>DIGITAL EXPERIENCE</span>
        </div>

      </div>
    </section>
  );
}

export default Technology;