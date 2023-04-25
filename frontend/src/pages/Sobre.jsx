import Banner from "../assets/components/Banner/Banner"
import Comunidades from "../assets/components/Comunidades/Comunidades"
import Footer from "../assets/components/Footer/Footer"
import Historia from "../assets/components/Historia/Historia"
import Impacto from "../assets/components/Impacto/Impacto"
import Missao from "../assets/components/Missao/Missao"
import Navbar from "../assets/components/Navbar/Navbar"
import Noticias from "../assets/components/Noticias/Noticias"
import Projetos from "../assets/components/Projetos/Projetos"
import axios from 'axios';
import { useState, useEffect } from 'react';

function Sobre () {
    const [sobre, setSobre] = useState([]);
    const ID="";

    useEffect(() => {
        axios.get('http://localhost:3000/sobre')
          .then(response => setSobre(response.data))
          .catch(error => console.log(error));
      
      }, [ID]);

    return(
        <div>
            <Navbar />
            <Historia data={sobre} />
            <Missao data={sobre} />
            <Noticias data={sobre}/>
            <Impacto data={sobre}/>
            <Projetos data={sobre}/>
            <Comunidades data={sobre}/>
            <Footer />

        </div>
    )
    
}

export default Sobre
