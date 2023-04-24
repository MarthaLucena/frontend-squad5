import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const baseURL = "http://localhost:3000/noticia";

export default function CardMaior() {
  const [postId, setPostId] = React.useState(1);
  const [post, setPost] = React.useState([]);
  const [error, setError] = React.useState(null);

  const filtrarNoticiasPorID = (id) => {
    axios
      .get(`${baseURL}?id_lte=${id}&_sort=id&_order=desc`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  React.useEffect(() => {
    filtrarNoticiasPorID(postId);
  }, [postId]);

  if (error) return `Error: ${error.message}`;

  if (!Array.isArray(post) || post.length === 0) {
    return "No post!";
  }

  return (
    <div className="p-1">
      {post.map((value) => (
        <div className="card bg-dark text-white" key={value.id}>
          <img src={value.URLIMG} className="card-img" alt="..." />
          <div className="card-box card-img-overlay">
            <h2 className="card-title">{value.TITULO}</h2>
            <a href={value.URLLINK} className="card-text">
              {value.ARTIGO}
            </a>
            <span>{value.AUTOR}</span>
            <address>{value.DATA}</address>
          </div>
        </div>
      ))}
    </div>
  );
}
