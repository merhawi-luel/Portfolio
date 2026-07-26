import "../styles/Hero.css";
import profilePhoto from "../assets/image.png";

function Hero({ name, role, intro, location }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__text">
        <h1 className="hero__name">{name}</h1>
        <p className="hero__role">{role}</p>
        <p className="hero__intro">{intro}</p>
        <p className="hero__location">{location}</p>
      </div>
      <img src={profilePhoto} alt={name} className="hero__photo" />
    </section>
  );
}

export default Hero;