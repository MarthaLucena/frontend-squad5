import "./Noticias.css"
import { AiOutlineLine } from "react-icons/ai";
import favela6 from "../../img/favela6.jpeg"
import favela7 from "../../img/favela7.jpg"


const Noticias = () => {
    return (
        <section className="noticias">

            <div className="notic">
                <h1>Notícias</h1>
                <div className="iconN"> <AiOutlineLine /> </div>
                <p>As notícias são publicadas por nossos administradores, que também são moradores. Ou seja, é de morador para morador. Você fala, nós escutamos. Nós falamos, mais moradores ficam informados.
                    Acreditamos que ao fornecer informações de qualidade e empoderar as pessoas com o conhecimento, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam.
                </p>
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