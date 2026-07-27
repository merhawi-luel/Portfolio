function ProjectCard({ project, index }) {
  const { title, description, stack, liveUrl, liveLabel, githubUrl, screenshot } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="project-card">
      <div className="project-card__frame">
        <div className="project-card__frame-bar">
          <span></span><span></span><span></span>
        </div>
        <div className="project-card__frame-body">
          {screenshot ? (
            <img src={screenshot} alt={`${title} screenshot` } />
          ) : (
            <span className="project-card__frame-placeholder">Screenshot coming soon</span>
          )}
        </div>
      </div>

      <div className="project-card__details">
        <span className="project-card__number">{number}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tags">
          {stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link-primary">
              View on GitHub →
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link-secondary">
              {liveLabel || "Live demo"} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;