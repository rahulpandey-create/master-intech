import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "PROJECT ONE",
      category: "WEB DEVELOPMENT",
    },
    {
      number: "02",
      title: "PROJECT TWO",
      category: "DIGITAL SOLUTION",
    },
    {
      number: "03",
      title: "PROJECT THREE",
      category: "UI / UX DESIGN",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <p className="section-label">SELECTED WORK</p>

        <h2>
          OUR
          <br />
          <span>PROJECTS</span>
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <span>PROJECT IMAGE</span>
            </div>

            <div className="project-info">
              <span className="project-number">{project.number}</span>

              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;