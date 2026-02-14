import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container reveal">
        <h2 className="section-title">Projects</h2>
        <p className="section-lead">
          Selected work across SaaS, ecommerce, and platform engineering.
        </p>
        <div className="card-grid project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
              style={{
                backgroundImage: `linear-gradient(150deg, rgba(10, 20, 30, 0.85), rgba(10, 20, 30, 0.55)), url(${project.image})`,
              }}
            >
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-card-overlay">
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
