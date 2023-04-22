import "./Historia.css"
import { AiOutlineLine } from "react-icons/ai";
import menu from "../../img/favela2.jpg"

const Historia = () => {
    return (
        <section className="quemsomos">
            <div className="quem">
                <h1>Quem somos? </h1>
                <div className="iconH">
                    <AiOutlineLine />
                </div>
                <p>
                    Nós somos uma plataforma voltada para conectar pessoas, empresas e organizações que buscam ajudar as comunidades carentes das favelas do Rio de Janeiro.
                    Acreditamos no poder da união e no potencial transformador do trabalho voluntário e da solidariedade.
                    Nosso objetivo é promover a inclusão social, a educação, a cultura, a saúde e o desenvolvimento sustentável das favelas,
                    garantindo assim melhores condições de vida e oportunidade para as pessoas que vivem nessas comunidades.
                    Contamos com uma equipe dedicada e comprometida com a nossa missão, além de parceiros e voluntários engajados em fazer a diferença. Junte-se a nós nessa jornada!
                </p>
                <div className="imgH">
                    <img src={menu} />
                </div>
            </div>
        </section>
    )
}

export default Historia;