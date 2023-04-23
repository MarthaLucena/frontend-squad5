import "./Comunidades.css"
import { AiOutlineLine } from "react-icons/ai";
import Lottie from "lottie-react";
import altofalante2 from "../Lottie/altofalante2.json"
import favela5 from "../../img/favela5.jpg"

const Comunidades = () => {
    return (
        <section className="comunidades">
            <Lottie className='altofalante2' animationData={altofalante2} />
            <div className="comun">
                <h1>Comunidades</h1>
                <div className="iconC"> <AiOutlineLine /> </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore dolorum, eos voluptatem nam iusto numquam quam hic, nostrum fuga distinctio vero ipsa quos architecto. Labore, consequatur. Expedita, error quos.</p>
            </div>
            <div className="imgC">
                <img src={favela5} />
            </div>
        </section>
    )
}
export default Comunidades