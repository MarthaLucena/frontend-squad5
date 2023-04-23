import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Portal.css";

export default function Portal() {
  return (
    <section className="contente">
      <div className="titulo-form">
        <h1>Portal de Reclamações</h1>
        <div className="linha_horizontal"></div>
      </div>
      <div className="box-form">
        <div className="box-outros">
          <div className="subtitulo-form">
            <h2>Siga nossas redes</h2>
          </div>
          <ul>
            <i className="icon">
              <FaFacebook />
            </i>
            <i className="icon">
              <FaTwitter />
            </i>
            <i className="icon">
              <FaInstagram />
            </i>
          </ul>
        </div>
        <form className="form">
          <div className="subtitulo-form">
            <h2>CONTATE-NOS</h2>
          </div>
          <div className="form-box">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
            <input type="text" placeholder="E-mail" />
            <textarea
              placeholder="Digite sua mensagem..."
              cols="30"
              rows="9"
            ></textarea>
            <div className="conceito">
              <label>Ruim</label>
              <input type="checkbox" placeholder="Ruim" />
              <label>Razoável</label>
              <input type="checkbox" placeholder="Razoável" />
              <label>Bom</label>
              <input type="checkbox" placeholder="Bom" />
              <label>Ótimo</label>
              <input type="checkbox" placeholder="Ótimo" />
            </div>
            <div className="button-form">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
