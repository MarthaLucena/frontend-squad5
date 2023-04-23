import { AiOutlineLine } from "react-icons/ai";
import "./Missao.css";
import Lottie from "lottie-react"
import altofalante4 from "../Lottie/altofalante4.json"
import favela3 from "../../img/favela3.jpg"


const Missao = () => {
    return (
        <section className="missao">
            <div className="miss">
                <h1>Nossa Missão</h1>
                <div className="iconM"> <AiOutlineLine /> </div>
                <p>Nossa missão é levar informação de qualidade para as comunidades, de forma clara e acessível. Acreditamos que a informação é um direito de todos e que é essencial   para o desenvolvimento e empoderamento das pessoas
                    Nosso projeto tem como objetivo fornecer, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam. </p>
            </div>
            <div className="iconsmage">
            <Lottie className='altofalante4' animationData={altofalante4} />
                <div className="imgM">
                    <img src={favela3} />
                </div>
            </div>

        </section>
    );

};

export default Missao