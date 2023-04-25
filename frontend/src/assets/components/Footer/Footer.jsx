import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerColumn">
  <h3>Alô comunidades</h3>
  <ul className="footerUl">
    <Link to="/"><li>home</li></Link>
    <Link to="/sobre"><li>sobre</li></Link>
    <Link to="/doe"><li>doe</li></Link>
    <Link to="/contato"><li>contato</li></Link>
    <Link to="/login"><li>login</li></Link>
    <Link to="/cadastro"><li>cadastre-se</li></Link>
  </ul>
  <div className="footerIcons">
    <li><FaFacebook /></li>
    <li><FaTwitter /></li>
    <li><FaInstagram /></li>
  </div>
</div>

    </footer >
  );
}
export default Footer;
