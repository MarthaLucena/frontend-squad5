import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const baseURL = "http://localhost:3000/noticia";

export default function CardMaior() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;

  if (posts.length === 0) {
    return "Loading...";
  }

  const ultimaNoticia = posts[posts.length - 1];

  return(
    <div className="p-1">
      <div className="card bg-dark text-white" key={ultimaNoticia.id}>
        <img src={ultimaNoticia.URLIMG} className="card-img" alt="..." />
        <div className="card-box card-img-overlay">
          <h2 className="card-title">{ultimaNoticia.TITULO}</h2>
          <a href={ultimaNoticia.URLLINK} className="card-text">
            {ultimaNoticia.ARTIGO}
          </a>
          <span>{ultimaNoticia.AUTOR}</span>
          <address>{ultimaNoticia.DATA}</address>
        </div>
      </div>
    </div>
  );
}
