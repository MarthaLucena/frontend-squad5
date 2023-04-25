import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 col-lg-4 col-xl-4">
            <h3 className="mb-4">Nossa Filosofia</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Seja nosso parceiro
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Faça sua doação
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Nossa equipe
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Cadastre-se
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4">
            <h3 className="mb-4">Sobre Nós</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Impacto social
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Mídia e imprensa
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Projetos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 ">
            <h3 className="mb-4">Nossas Redes</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center d-flex justify-content-between">
          <div className="col-md-6">
            <h2 className="mb-4">Alô Comunidades</h2>
            <p className="mb-0">
              Rua das Palmeiras, 123 - Botafogo, Rio de Janeiro - RJ
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Nossos Parceiros</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Prefeitura do RIO
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Senac RIO
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Resília
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="col-md-12 text-center">
          <p>
            &copy; Desenvolvido pela equipe dos Programadores Cariocas
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
