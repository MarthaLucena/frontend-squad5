import "./Footer.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h1 className="fonteLogo">Alô Comunidades</h1>
      <div className="box-footer">
        <div>
          <h2 className="fonteLogo">Nossa Filosofia</h2>
          <ul className="box-collum">
            <a href="">Seja nosso parceiro</a>
            <a href="">Faça sua doação</a>
            <a href="">Nossa equipe</a>
            <a href="">Cadastre-se</a>
          </ul>
        </div>
        <div>
          <h2 className="fonteLogo">Sobre Nós</h2>
          <ul className="box-collum">
            <a href="">Sobre</a>
            <a href="">Impacto social</a>
            <a href="">Mídia e imprensa</a>
            <a href="">Projetos</a>
          </ul>
        </div>
        <div>
          <h2 className="fonteLogo">Nossas Redes</h2>
          <ul>
            <i className="icon"><FaFacebook/></i>
            <i className="icon"><FaTwitter/></i>
            <i className="icon"><FaInstagram/></i>
          </ul>
        </div>
        <div>
          <h2 className="fonteLogo">Nossos Parceiros</h2>
          <ul>
            <a href="">Prefeitura do RIO</a>
            <a href="">Senac RIO</a>
            <a href="">Resília</a>
          </ul>
        </div>
      </div>
      <div className="box-copy">
        <p> &copy; Desenvolvidos pela equipe dos Programadores Cariocas</p>
      </div>
    </footer>
  );
}

export default Footer;
