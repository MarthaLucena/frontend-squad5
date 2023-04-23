import "./Noticias.css"
import favela2 from "../../img/favela2.jpg"
import { AiOutlineLine } from "react-icons/ai";
import favela4 from "../../img/favela4.jpg"

const Noticias = () => {
    return (
        <section className="noticias">
            <div className="notimg">
                <img src={favela2} />
            </div>
            <div className="notic">
                <h1>Notícias</h1>
                <div className="iconN"> <AiOutlineLine /> </div>
                <p>As notícias sãoi publicadas por nossos administradores, que também são moradores. Ou seja, é de morador para morador. Você fala, nós escutamos. Nós falamos, mais moradores ficam informados.
                    Acreditamos que ao fornecer informações de qualidade e empoderar as pessoas com o conhecimento, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam.
                </p>
            </div>
            <div className="notimg">
                <img src={favela4} />
            </div>
        </section>
    )
}

export default Noticias;