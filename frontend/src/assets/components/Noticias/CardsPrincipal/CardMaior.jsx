import axios from "axios";
import React from "react";
import "./CardMaior.css"

const baseURL = "http://localhost:3000/noticia";

export default function CardMaior() {
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
    <div className="box__big">
      <img src="./src/assets/img/favela.jpg" alt="Imagem" />
      <h3>{post.TITULO}</h3>
      <a>{post.ARTIGO}</a>
    </div>
  );
}
