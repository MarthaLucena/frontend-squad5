import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card_02.css";

const baseURL = "http://localhost:3000/noticia";

export default function CardMenores() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  return (
    <div className="p-2">
      {" "}
      {typeof post !== "undefined" &&
        post.map((value) => {
          return (
            <div className="card bg-dark text-white">
              <img
                src="./src/assets/img/favela.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h5 className="card-title">{value.TITULO}</h5>
                <p className="card-text">{value.ARTIGO}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
