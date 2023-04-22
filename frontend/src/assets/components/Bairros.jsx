import "./Bairros.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bairros = () => {
  return (
    <section className="container">
        <div className="bairros">
          <h2 className="containerTitulo">Conheça nosso Subúrbio</h2>
          <div className="bairroContainer">
            <div className="bairroTituloDescricao">
              <h2 className="bairroTitulo">Penha</h2>
              <p className="bairroDescricao">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum
                laborum assumenda maxime magni deleniti voluptate, eaque ab sit
                aliquid quibusdam, ipsam quis eveniet reprehenderit, mollitia facere
                nihil veniam dignissimos. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Excepturi facere reprehenderit eveniet eum, nihil
                amet eaque architecto, minima illum commodi debitis culpa expedita
                iure ut tempore. Id iste labore nam.
              </p>
            </div>
            <img src="./src/assets/img/favela.jpg" className="bairroImagem" />
          </div>
          <FaChevronLeft /> <FaChevronRight />
        </div>
    </section>
  );
};

export default Bairros;
