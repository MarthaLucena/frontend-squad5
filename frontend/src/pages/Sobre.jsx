
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
<<<<<<< HEAD
            <Historia data={sobre} />
            <Missao data={sobre} />
            <Noticias data={sobre}/>
            <Impacto data={sobre}/>
            <Projetos data={sobre}/>
            <Comunidades data={sobre}/>
=======

            <Historia />
            <Missao />
            <Noticias />
            <Impacto />
            <Projetos />
            <Comunidades />
>>>>>>> 96830e768cf92b0627b7f8e127f5bcce8d5e009a
            <Footer />

        </div>
    )
    
}

export default Sobre
