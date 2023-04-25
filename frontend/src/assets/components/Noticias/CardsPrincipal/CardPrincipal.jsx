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

  const arr = posts[posts.length - 1];

  return (
    <section className="container cont_principal">
      <h2 className="cardGroupTitle">Por dentro do RIO</h2>
      <div className="row row-cols-1 d-flex justify-content-center">
        <div className="col">
          <div
            className="card card_principal bg-dark text-white img-fluid img-zoom"
            key={arr.id}
          >
            <img src={arr.urlImg} className="card-img " alt="..." />
            <div className="card-box card-img-overlay">
              <h2 className="card-title">{arr.titulo}</h2>
              <a href={arr.urlLink} className="card-text">
                {arr.artigo}
              </a>
              <span>{arr.autor}</span>
              <address>{arr.data}</address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
