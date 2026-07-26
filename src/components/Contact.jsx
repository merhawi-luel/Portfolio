import "../styles/Contact.css";

function Contact({ email, github, linkedin }) {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__heading">Contact</h2>
      <p className="contact__lede">Open to opportunities and collaboration.</p>
      <div className="contact__links">
        <a href={`mailto:${email}`}>{email}</a>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;