import "../styles/About.css";

function About({ paragraphs }) {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>
      {paragraphs.map((paragraph, index) => (
        <p className="about__paragraph" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export default About;