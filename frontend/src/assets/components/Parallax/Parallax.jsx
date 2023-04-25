import Bairros from "../Bairros/Bairros";
import Mapa from "../Mapa/Mapa";
import "./Parallax.css";
import Resumo from "../Resumo/Resumo"

const MyParallax = () => {
  return (
    <main className="moduleContent">
      <div className="wrapper">
        <Resumo />
        <Bairros />
        <Mapa />
      </div>
    </main>
  );
};

export default MyParallax;
