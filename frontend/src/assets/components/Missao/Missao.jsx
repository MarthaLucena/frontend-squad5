import { AiOutlineLine } from "react-icons/ai";
import "./Missao.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri"

const Missao = () => {
    return (
        <section className="missao">
            <div className="miss">
                <h1>Nossa Missão</h1>
                <div className="iconM"> <AiOutlineLine /> </div>
                <p>Nossa missão é levar informação de qualidade para as comunidades, de forma clara e acessível. Acreditamos que a informação é um direito de todos e que é essencial   para o desenvolvimento e empoderamento das pessoas
                    Nosso projeto tem como objetivo fornecer informações relevantes e atualizadas sobre diversos temas, como saúde, educação, meio ambiente, direitos humanos, entre outros. Queremos ajudar as pessoas a entenderem melhor esses temas e como eles impactam suas vidas, bem como incentivar a participação ativa da comunidade em questões importantes para a sociedade.
                    Para alcançar nossa missão, trabalhamos em estreita colaboração com as comunidades, ouvindo suas necessidades e preocupações e adaptando nossa comunicação para atender às suas demandas. Utilizamos uma linguagem simples e acessível em nossos materiais, além de usar canais de comunicação que atinjam a maior quantidade possível de pessoas, como redes sociais, rádios locais e panfletos.
                    Acreditamos que ao fornecer informações de qualidade e empoderar as pessoas com o conhecimento, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam. </p>
            </div>
            <div className="icon2">
                <h2><AiOutlineDoubleRight />Saiba mais</h2>
            </div>
        </section>
    );

};

export default Missao