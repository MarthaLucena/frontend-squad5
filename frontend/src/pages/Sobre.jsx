
import Comunidades from "../assets/components/Comunidades/Comunidades"
import Footer from "../assets/components/Footer/Footer"
import Historia from "../assets/components/Historia/Historia"
import Impacto from "../assets/components/Impacto/Impacto"
import Missao from "../assets/components/Missao/Missao"
import Navbar from "../assets/components/Navbar/Navbar"
import Noticias from "../assets/components/Noticias/Noticias"
import Projetos from "../assets/components/Projetos/Projetos"

function Sobre () {
    return(
        <div>
            <Navbar />

            <Historia />
            <Missao />
            <Noticias />
            <Impacto />
            <Projetos />
            <Comunidades />
            <Footer />

        </div>
    )
    
}

export default Sobre