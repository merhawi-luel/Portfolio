import "../styles/Contact.css";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact({ email, github, linkedin, telegram, twitter, leetcode }) {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById("contact-submit-btn");
    const feedback = document.getElementById("contact-feedback");

    btn.disabled = true;
    btn.textContent = "Sending...";
    feedback.style.display = "none";

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          feedback.className = "contact-form__feedback contact-form__feedback--success";
          feedback.textContent = "Message sent! I'll get back to you soon.";
          feedback.style.display = "flex";
          form.reset();
        },
        (error) => {
          feedback.className = "contact-form__feedback contact-form__feedback--error";
          feedback.textContent = error.text || "Something went wrong. Try again or email me directly.";
          feedback.style.display = "flex";
        }
      )
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "Send message";
      });
  };

  return (
    <section id="contact" className="contact">
      <span className="path-label">contact</span>
      <h2 className="contact__heading">Let's work together.</h2>
      <p className="contact__lede">
        Open to internships, collaboration, and opportunities in web
        development and ML. I'll reply as soon as I can.
      </p>

      <div className="contact__grid">
        <div className="contact__cards">
          <a className="contact-card" href={`mailto:${email}`}>
            <div className="contact-card__icon">✉</div>
            <div>
              <div className="contact-card__label">Email</div>
              <div className="contact-card__value">{email}</div>
            </div>
            <span className="contact-card__arrow">↗</span>
          </a>

          <a className="contact-card" href={github} target="_blank" rel="noopener noreferrer">
            <div className="contact-card__icon"><SiGithub size={16} /></div>
            <div>
              <div className="contact-card__label">GitHub</div>
              <div className="contact-card__value">View profile</div>
            </div>
            <span className="contact-card__arrow">↗</span>
          </a>

          <a className="contact-card" href={linkedin} target="_blank" rel="noopener noreferrer">
            <div className="contact-card__icon"><FaLinkedin size={16} /></div>
            <div>
              <div className="contact-card__label">LinkedIn</div>
              <div className="contact-card__value">Connect with me</div>
            </div>
            <span className="contact-card__arrow">↗</span>
          </a>

          <a className="contact-card" href={telegram} target="_blank" rel="noopener noreferrer">
            <div className="contact-card__icon"><Send size={18} /></div>
            <div>
              <div className="contact-card__label">Telegram</div>
              <div className="contact-card__value">@Merhawi_Luel</div>
            </div>
            <span className="contact-card__arrow">↗</span>
          </a>

          <a className="contact-card" href={twitter} target="_blank" rel="noopener noreferrer">
            <div className="contact-card__icon"><SiX size={16} /></div>
            <div>
              <div className="contact-card__label">Twitter / X</div>
              <div className="contact-card__value">Follow me</div>
            </div>
            <span className="contact-card__arrow">↗</span>
          </a>

          <a className="contact-card" href={leetcode} target="_blank" rel="noopener noreferrer">
            <div className="contact-card__icon"><SiLeetcode size={16} /></div>
            <div>
              <div className="contact-card__label">LeetCode</div>
              <div className="contact-card__value">View profile</div>
            </div>
            <span className="contact-card__arrow">↗</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <label className="contact-form__label" htmlFor="user_name">Name</label>
          <input className="contact-form__input" type="text" name="user_name" id="user_name" placeholder="Your name" required />

          <label className="contact-form__label" htmlFor="user_email">Email</label>
          <input className="contact-form__input" type="email" name="user_email" id="user_email" placeholder="you@email.com" required />

          <label className="contact-form__label" htmlFor="message">Message</label>
          <textarea className="contact-form__textarea" name="message" id="message" placeholder="Tell me about your project or role..." required></textarea>

          <button className="contact-form__submit" id="contact-submit-btn" type="submit">
            Send message
          </button>

          <div id="contact-feedback" className="contact-form__feedback" style={{ display: "none" }}></div>
        </form>
      </div>
    </section>
  );
}

export default Contact;