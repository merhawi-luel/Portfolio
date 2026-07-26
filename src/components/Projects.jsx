import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;