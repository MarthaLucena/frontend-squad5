import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const baseURL = "http://localhost:3000/noticia/id";
const idDaNoticia = 3; // Substitua pelo ID da notícia desejada

export default function CardMaior() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  const buscarNoticiaPorID = (id) => {
    axios
      .get(`${baseURL}/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  React.useEffect(() => {
    buscarNoticiaPorID(idDaNoticia);
  }, []);

  if (error) return `Error: ${error.message}`;

  if (!post) {
    return "";
  }

  return (
    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-5">
      <div className="p-2">
        <div className="card card_secundario bg-dark text-white" key={post.id}>
          <img src={post.urlImg} className="card-img" alt="..." />
          <div className="card-box card-img-overlay">
            <h2 className="card-title">{post.titulo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
