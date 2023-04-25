import "./Noticias.css"
import { AiOutlineLine } from "react-icons/ai";
import favela6 from "../../img/favela6.jpeg"
import favela7 from "../../img/favela7.jpg"


const Noticias = ({data}) => {
    const item = data.filter(sobre => sobre.ID === 3)[0];
    const { TITULO, TEXTO } = item || {};

    return (
        <section className="noticias">

            <div className="notic">
            <h1>{TITULO}</h1>
                <div className="iconN"> <AiOutlineLine /> </div>
                <p>{TEXTO}</p>

            </div>
            <div className="imagesNot">
                <div className="favela6">
                    <img src={favela6} />
                </div>
                <div className="favela7">
                    <img src={favela7} />
                </div>
            </div>

        </section>
    )
}

export default Noticias;