import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Portal.css";

export default function Portal() {
  return (
    <section className="box-portal">
      
        <div className="titulo">
          <h1>Portal de Reclamações</h1>
        </div>
        <aside className="box-outros">
          <h2 className="subtitulo">Siga nossas redes</h2>
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
        </aside>
        <form className="box-form">
          <h2 className="subtitulo">Contate-nos</h2>
          <fieldset className="form">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
            <input type="text" placeholder="E-mail" />
            <textarea
              placeholder="Digite sua mensagem..."
              cols="30"
              rows="10"
            ></textarea>
            <div>
              <label>Ruim</label>
              <input type="checkbox" placeholder="Ruim" />
              <label>Razoável</label>
              <input type="checkbox" placeholder="Razoável" />
              <label>Bom</label>
              <input type="checkbox" placeholder="Bom" />
              <label>Ótimo</label>
              <input type="checkbox" placeholder="Ótimo" />
            </div>
            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      
    </section>
  );
}
