import "./Historia.css"
import { AiOutlineLine } from "react-icons/ai";
import favela2 from "../../img/favela2.jpg"
import favela3 from "../../img/favela3.jpg"

const Historia = ({ data }) => {
    const item = data.filter(sobre => sobre.ID === 1)[0];
    const { TITULO, TEXTO } = item || {};
    return (
        <section className="quemsomos">
            <div className="quem">
                <h1>{TITULO}</h1>
                <div className="iconH">
                    <AiOutlineLine />
                </div>
                <p>{TEXTO}</p>
            </div>
            <div className="imagesHis">
                <div className="favela2">
                    <img src={favela2} />
                </div>
                <div className="favela3">
                    <img src={favela3} />
                </div>
            </div>

        </section>
    )
}

export default Historia;