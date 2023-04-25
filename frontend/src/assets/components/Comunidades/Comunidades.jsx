import "./Comunidades.css"
import { AiOutlineLine } from "react-icons/ai";
import favela9 from "../../img/favela9.jpg"

const Comunidades = ({ data }) => {
    const item = data.filter(sobre => sobre.ID === 6)[0];
    const { TITULO, TEXTO } = item || {};
    return (

        <section className="comunidades">
            <div className="comun">
                <h1>{TITULO}</h1>
                <div className="iconC"> <AiOutlineLine /> </div>
                <p>{TEXTO}</p>
            </div>
            <div className="imgCom">
                <img src={favela9} />
            </div>

        </section>
    )
}
export default Comunidades