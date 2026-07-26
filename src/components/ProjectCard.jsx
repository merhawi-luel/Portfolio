function ProjectCard({ project }) {
  const { title, description, stack, liveUrl, githubUrl } = project;

  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <div className="project-card__tags">
        {stack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-card__links">
        {liveUrl && <a href={liveUrl}>Live demo</a>}
        {githubUrl && <a href={githubUrl}>GitHub</a>}
      </div>
    </div>
  );
}

export default ProjectCard;