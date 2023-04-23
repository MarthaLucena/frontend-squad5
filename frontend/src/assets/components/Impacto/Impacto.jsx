import "./Impacto.css"
import { AiOutlineLine } from "react-icons/ai";
import grafite from "../../img/grafite.jpg"
import Lottie from "lottie-react"
import altofalante1 from "../Lottie/altofalante1.json"

const Impacto = () => {
    return (
        <section className="impacto">
            <Lottie className='altofalante1' animationData={altofalante1} />
            <div className="impac">
                <h1>O Impacto Social</h1>
                <div className="iconI"> <AiOutlineLine /> </div>
                <p>Um projeto que visa informar os moradores de uma comunidade pode ter um impacto social significativo na vida das pessoas. Quando os moradores são informados sobre seus direitos e têm acesso a informações importantes sobre serviços públicos e questões sociais, eles podem tomar decisões mais informadas e se engajar mais ativamente na sua comunidade.
                    <br></br>
                    Visamos informar os moradores de uma comunidade pode ter um impacto social significativo, contribuind	o para a melhoria da saúde, o aumento da conscientização sobre direitos humanos e a participação ativa da comunidade em questões sociais e políticas.
                </p>
            </div>
            <div className="imgI">
                <img src={grafite} />
            </div>
        </section>
    )
}

export default Impacto