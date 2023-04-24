import "./Projetos.css";
import { AiOutlineLine } from "react-icons/ai";
import grafite from "../../img/grafite.jpg"
import escada from "../../img/escada.jpg"


const Projetos = () => {
    return (
        <section className="projetos">
            <div className="proj">
                <h1>Projetos</h1>
                <div className="iconP"> <AiOutlineLine /> </div>
                <p>Um projeto que fornece informações sobre os direitos humanos pode ajudar a aumentar a conscientização sobre questões importantes, como a discriminação e a violência. Isso pode levar a uma maior tolerância e respeito entre os membros da comunidade, além de ajudar a prevenir e combater atos de violência e discriminação. </p>
            </div>
            <div className="imgPro">
                <div className="escada">
                    <img src={escada} />
                </div>
                <div className="grafite">
                    <img src={grafite} />
                </div>
            </div>
        </section>
    )
}

export default Projetos