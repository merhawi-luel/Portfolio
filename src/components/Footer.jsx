import "../styles/Footer.css";

function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} {name}
    </footer>
  );
}

export default Footer;