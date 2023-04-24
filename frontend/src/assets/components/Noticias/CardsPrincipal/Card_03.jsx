import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const baseURL = "http://localhost:3000/noticia/id";
const idDaNoticia = 1; // Substitua pelo ID da notícia desejada

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
    return "Loading...";
  }

  return (
    <div className="p-1">
      <div className="card bg-dark text-white" key={post.id}>
        <img src={post.URLIMG} className="card-img" alt="..." />
        <div className="card-box card-img-overlay">
          <h2 className="card-title">{post.TITULO}</h2>
        </div>
      </div>
    </div>
  );
}
