import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <span className="path-label">03 — projects</span>
      <h2 className="projects__heading">Selected work</h2>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}

export default Projects;