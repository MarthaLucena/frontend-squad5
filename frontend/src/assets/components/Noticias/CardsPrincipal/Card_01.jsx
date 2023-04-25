import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const baseURL = "http://localhost:3000/noticia";

export default function CardMaior() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;

  if (posts.length === 0) {
    return "";
  }

  const ultimaNoticia = posts[posts.length - 2];

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-2">
      <div
        className="card card_principal bg-dark text-white"
        key={ultimaNoticia.id}
      >
        <img src={ultimaNoticia.urlImg} className="card-img" alt="..." />
        <div className="card-box card-img-overlay">
          <h2 className="card-title">{ultimaNoticia.titulo}</h2>
          <a href={ultimaNoticia.urlLink} className="card-text">
            {ultimaNoticia.artigo}
          </a>
          <span>{ultimaNoticia.autor}</span>
          <address>{ultimaNoticia.data}</address>
        </div>
      </div>
    </div>
  );
}
