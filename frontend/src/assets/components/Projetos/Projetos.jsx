import "./Projetos.css";
import { AiOutlineLine } from "react-icons/ai";
import grafite from "../../img/grafite.jpg"
import escada from "../../img/escada.jpg"


const Projetos = ({ data }) => {
    const item = data.filter(sobre => sobre.ID === 5)[0];
    const { TITULO, TEXTO } = item || {};
    return (
        <section className="projetos">
            <div className="proj">
                <h1>{TITULO}</h1>
                <div className="iconP"> <AiOutlineLine /> </div>
                <p>{TEXTO}</p>
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