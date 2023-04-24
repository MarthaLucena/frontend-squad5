import Bairros from "../Bairros/Bairros";
import Cards from "../CardNoticia/Cards";
import Mapa from "../Mapa/Mapa";
import "./Parallax.css";

const MyParallax = () => {
  return (
    <main className="moduleContent">
      <div className="wrapper">
        <Cards />
        <Bairros />
        <Mapa />
      </div>
    </main>
  );
};

export default MyParallax;
