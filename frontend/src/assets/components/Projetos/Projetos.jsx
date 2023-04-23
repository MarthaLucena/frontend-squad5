import "./Projetos.css";
import { AiOutlineLine } from "react-icons/ai";
import Lottie from "lottie-react"
import altofalante3 from "../Lottie/altofalante3.json"

const Projetos = () => {
    return (
        <section className="projetos">
            <Lottie className='altofalante3' animationData={altofalante3} />
            <div className="proj">
                <h1>Projetos</h1>
                <div className="iconP"> <AiOutlineLine /> </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptates facilis tempora, hic quos repellendus explicabo provident. Tempore corporis minima, aliquid culpa recusandae quibusdam, modi repellat praesentium ex at aliquam.</p>
            </div>
        </section>
    )
}

export default Projetos