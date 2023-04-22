import { FaTwitter, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../components/Cards.css";
import axios from 'axios'


function Cards() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/noticia')
      .then(response => response.json())
      .then(data => setNoticias(data.noticias))
      .catch(error => console.error(error));
  }, []);

  /* 
    return (
      
      <section className="container">
          <div className="cards">
            <h2 className="cardGroupTitle">Por dentro do RIO</h2>
            <div className="cardGroup">
              <div className="card">
                <div className="img">
                  <img src="./src/assets/img/favela.jpg" className="cardImg" />
                  <span className="cardLabel" style={{ backgroundColor: "#fc006d" }}>
                    Eventos
                  </span>
                </div>
                <div className="cardContent">
                  <span className="date">20 de Abril, 2023</span>
                  <h2 className="title">Título da notícia</h2>
                  <p>
                    A partir de hoje, 13 de abril, a vacinação contra a gripe estará
                    disponível na zona norte do Rio de Janeiro. Procure um posto de
                    saúde mais próximo e proteja-se contra a doença.
                  </p>
                  <div className="icons">
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src="./src/assets/img/favela.jpg" className="cardImg" />
                  <span className="cardLabel" style={{ backgroundColor: "#3990FB" }}>
                    Esporte
                  </span>
                </div>
                <div className="cardContent">
                  <span className="date">20 de Abril, 2023</span>
                  <h2 className="title">Título da notícia</h2>
                  <p>
                    A partir de hoje, 13 de abril, a vacinação contra a gripe estará
                    disponível na zona norte do Rio de Janeiro. Procure um posto de
                    saúde mais próximo e proteja-se contra a doença.
                  </p>
                  <div className="icons">
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src="./src/assets/img/favela.jpg" className="cardImg" />
                  <span className="cardLabel" style={{ backgroundColor: "#e4831a" }}>
                    Emprego
                  </span>
                </div>
                <div className="cardContent">
                  <span className="date">20 de Abril, 2023</span>
                  <h2 className="title">Título da notícia</h2>
                  <p>
                    A partir de hoje, 13 de abril, a vacinação contra a gripe estará
                    disponível na zona norte do Rio de Janeiro. Procure um posto de
                    saúde mais próximo e proteja-se contra a doença.
                  </p>
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
  }; */

  return (
      <div>
      <h1>Notícias</h1>
      {noticias && (
        <ul>
          {noticias.map((noticia) => (
            <li key={noticia.id}>
              <h2>{noticia.titulo}</h2>
              <p>Autor: {noticia.autor}</p>
              <p>Data: {noticia.data}</p>
              <p>{noticia.artigo}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )};
  
export default Cards;
