import "./Cards.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardNoticia from "./CardNoticia";

function Cards() {
  const [listNoticias, setListNoticias] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/noticia").then((response) => {
      setListNoticias(response.data);
    });
  }, []);

  return (
    <div>
      {typeof listNoticias !== "undefined" &&
        listNoticias.map((value) => {
          return (
            <CardNoticia
              key={value.ID}
              listCardNoticia={listNoticias}
              setListCardNoticia={setListNoticias}
              genero={value.GENERO}
              titulo={value.TITULO}
              subtitulo={value.SUBTITULO}
              artigo={value.ARTIGO}
              autor={value.AUTOR}
              data={value.DATA}
              hora={value.HORA}
            ></CardNoticia>
          );
        })}
    </div>
  );
}

export default Cards;
