import { AiOutlineLine } from "react-icons/ai";
import "./Missao.css";
import favela4 from "../../img/favela4.jpg"


const Missao = ({ data }) => {
    const item = data.filter(sobre => sobre.ID === 2)[0];
    const { TITULO, TEXTO } = item || {};
    return (
        <section className="missao">
            <div className="miss">
                <h1>{TITULO}</h1>
                <div className="iconM"> <AiOutlineLine /> </div>
                <p>{TEXTO}</p>
            </div>
            <div className="imageMiss">
                <img src={favela4} />
            </div>


        </section>
    );

};

export default Missao