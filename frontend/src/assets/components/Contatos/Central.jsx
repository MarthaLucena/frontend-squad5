import "./Central.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

export default function Central() {
  return (
    <section className="container contente">
      <div className="titulo-central">
        <h1>Central de Atendimento</h1>
        <div className="linha_horizontal"></div>
      </div>
      <div className="box-central">
        <div className="box">
          <h2>Localização</h2>
          <address>
            <FaLocationArrow />
            Avenida 24 de Julho, Rio de Janeiro
          </address>
          <address>Riachuelo, nº 34, 21999-999</address>

          <h2>Horário comercial</h2>
          <address>
            <FaClock /> Seg - Sex .... 10 hr até 20 hr
          </address>
          <address>Sab - Dom .... Fechado</address>
        </div>
        <div className="linha_vertical"></div>
        <div className="linha"></div>
        <div className="box">
          <h2>Contatos</h2>
          <address>
            <FaPhone /> (21) 4234-4567
          </address>
          <address>
            <FaPhone /> (21) 4234-4567
          </address>
          <address>
            <FaWhatsapp /> (21) 94234-4567
          </address>
          <address>
            <FaEnvelope /> AloComunidade@gmail.com
          </address>
        </div>
      </div>
    </section>
  );
}
