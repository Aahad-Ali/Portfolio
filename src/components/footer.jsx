import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footer logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            rerum amet facilis, voluptatibus iste iure voluptatum
          </p>

          <div className="footer_socials">
            <a
              href="https://www.linkedin.com/in/aahad-ali-a027a8211/"
              target="_blank"
              alt="..."
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              alt="..."
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              alt="..."
              rel="noreferrer "
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              alt="..."
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">about</Link>
          <Link to="/plans">plans</Link>
          <Link to="/trainers">trainers</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/contact">contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="s">blog</Link>
          <Link to="s">case studies</Link>
          <Link to="/s">events</Link>
          <Link to="/s">comunities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">support</Link>
         
     
        </article>
        <div className="footer_copyright">
          <small>2023 AAR &copy; All Right Reserved </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
