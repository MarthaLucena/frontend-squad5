import "../Banner/Banner.css";
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div>
      <section className="module parallax parallax-1">
        <div className="overlay"></div>
        <h4>ALÔ COMUNIDADES - O seu portal de notícias da Zona Norte</h4>
        <h1>INOVAÇÃO NA FAVELA & UNIÃO</h1>
       <button className="lerMaisBtn"><Link to="/sobre">LER +</Link></button> 
      </section>
    </div>
  );
};

export default Banner;
