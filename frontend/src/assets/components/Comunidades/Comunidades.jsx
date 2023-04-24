import "./Comunidades.css"
import { AiOutlineLine } from "react-icons/ai";
import favela9 from "../../img/favela9.jpg"

const Comunidades = () => {
    return (
        <section className="comunidades">
            <div className="comun">
                <h1>Comunidades</h1>
                <div className="iconC"> <AiOutlineLine /> </div>
                <p>Uma comunidade bem informada é essencial para o seu desenvolvimento e crescimento. Quando os membros de uma comunidade têm acesso a informações precisas e relevantes, eles se tornam mais conscientes dos problemas e oportunidades que afetam suas vidas. Isso pode levar a uma série de benefícios importantes para a comunidade.</p>
            </div>
            <div className="imgCom">
                <img src={favela9} />
            </div>

        </section>
    )
}
export default Comunidades