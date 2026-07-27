import "../styles/About.css";

function About({ paragraphs }) {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>

      <blockquote className="about__quote">
        <p>I'm Merhawi, a third-year Computer Science student at Addis Ababa University,
           Full-Stack Web Developer, Machine Learning enthusiast, and workflow automation builder.</p>
      </blockquote>

      {paragraphs.map((paragraph, index) => (
        <p className="about__paragraph" key={index}>
          {paragraph}
        </p>
      ))}

      <div className="about__chips">
        <span className="about__chip about__chip--accent">Self-taught</span>
        <span className="about__chip about__chip--accent">Full stack</span>
        <span className="about__chip about__chip--accent">ML in progress</span>
        <span className="about__chip about__chip--accent">Builder</span>
      </div>
    </section>
  );
}

export default About;