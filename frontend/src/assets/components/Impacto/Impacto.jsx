import "./Impacto.css"
import { AiOutlineLine } from "react-icons/ai";
import favela5 from "../../img/favela5.jpg"

const Impacto = ({data}) => {
    const item = data.filter(sobre => sobre.ID === 4)[0];
    const { TITULO, TEXTO } = item || {};
    return (
        <section className="impacto">
            <div className="impac">
            <h1>{TITULO}</h1>

                <div className="iconI"> <AiOutlineLine /> </div>
                <p>{TEXTO}</p>
            </div>
            <div className="imgImp">
                <img src={favela5} />
            </div>

        </section>
    )
}

export default Impacto