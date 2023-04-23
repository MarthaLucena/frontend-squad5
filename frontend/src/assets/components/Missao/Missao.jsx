import { AiOutlineLine } from "react-icons/ai";
import "./Missao.css";
import Lottie from "lottie-react"
import bandeira from "../Lottie/bandeira.json"

const Missao = () => {
    return (
        <section className="missao">
            
            <Lottie className="bandeira" animationData={bandeira} />
            <div className="miss">
                <h1>Nossa Missão</h1>
                <div className="iconM"> <AiOutlineLine /> </div>
                <p>Nossa missão é levar informação de qualidade para as comunidades, de forma clara e acessível. Acreditamos que a informação é um direito de todos e que é essencial   para o desenvolvimento e empoderamento das pessoas
                    Nosso projeto tem como objetivo fornecer, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam. </p>
            </div>

        </section>
    );

};

export default Missao