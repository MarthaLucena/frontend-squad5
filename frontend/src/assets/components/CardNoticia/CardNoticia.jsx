import { FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";
import "./CardNoticia.css";

function CardNoticia(props) {
  function getGeneroClass(genero) {
    let classValue = "cardLabelPadrao";
    switch (genero) {
      case "Esporte":
        classValue = "cardLabelEsporte";
        break;
      case "Educação":
        classValue = "cardLabelEducacao";
        break;
      case "Eventos":
        classValue = "cardLabelEventos";
        break;
      default:
        classValue = "cardLabelPadrao";
        break;
    }
    return classValue;
  }

  return (
    <section className="container">
      <div className="cards">
        <h2 className="cardGroupTitle">Por dentro do RIO</h2>
        <div className="cardGroup">
          <div className="card">
            <div className="img">
              <img src="./src/assets/img/favela.jpg" className="cardImg" />
              <span className={`cardLabel ${getGeneroClass(props.genero)}`}>
                {props.genero}
              </span>
            </div>
            <div className="cardContent">
              <span className="date">20 de Abril, 2023</span>
              <h2 className="title">{props.titulo}</h2>
              <p>{props.artigo}</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardNoticia;
