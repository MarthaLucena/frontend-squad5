import "./Cards.css";
import React from "react";
import axios from "axios";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards() {
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

  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/noticia")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  const arr = post.map((post, index) => {
    return (
      <div className="col">
        <div className="card h-100">
          <div className="img">
            <img src={post.urlImg} className="card-img-top img-fluid img-zoom" />
            <span className={`cardLabel ${getGeneroClass(post.genero)}`}>
              {post.genero}
            </span>
          </div>
          <div className="card-body">
            <span className="date">{post.data}</span>
            <h2 className="title">{post.titulo}</h2>
            <a href={post.urlLink} className="text-decoration-none">
              <p className="card-text text-dark">{post.artigo}</p>
            </a>
            <div class="card-footer icons">
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="container mt-5 mb-5">
      <h2 className="cardGroupTitle">Outras notícias</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {arr}
      </div>
    </section>
  );
}
