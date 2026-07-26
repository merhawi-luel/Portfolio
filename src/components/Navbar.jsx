import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

function Navbar({ name, links }) {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">
        <img src={logo} alt={`${name} logo`} className="navbar__logo-img" />
      </a>
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;