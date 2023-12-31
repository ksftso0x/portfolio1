import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <a
      href={`https://github.com/${process.env.REACT_APP_GITHUB}`}
      className="link footer__link"
      target="blank"
    >
      Created By Alan Grant
    </a>
  </footer>
);

export default Footer;
