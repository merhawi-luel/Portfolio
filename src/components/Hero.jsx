import "../styles/Hero.css";
import profilePhoto from "../assets/image.png";
import { MapPin, Clock7 } from "lucide-react";

function Hero({ name, role, intro, location }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__left">
        <span className="hero__badge">Available for work</span>

        <h1 className="hero__name">{name}</h1>
        <p className="hero__title">{role}</p>
        <p className="hero__description">{intro}</p>

        <div className="hero__buttons">
          <a href="#contact" className="hero__btn hero__btn--primary">
            Contact Me
          </a>
          <a href="#projects" className="hero__btn hero__btn--secondary">
            View Projects
          </a>
        </div>

        <div className="hero__info">
          <div className="hero__infoItem">
            <span className="hero__infoLabel">
              <MapPin size={14} className="hero__infoIcon" />
              Location
            </span>
            <span className="hero__infoValue">{location}</span>
          </div>

          <div className="hero__infoItem">
            <span className="hero__infoLabel">
              <Clock7 size={14} className="hero__infoIcon" />
              Currently
            </span>
            <span className="hero__infoValue">Building Modern Web Apps</span>
          </div>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__imageWrapper">
          <div className="hero__glow"></div>
          <img src={profilePhoto} alt={name} className="hero__photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;