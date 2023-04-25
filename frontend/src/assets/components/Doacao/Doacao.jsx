import { FaCopy, FaCheck } from "react-icons/fa"
import React, { useState } from 'react';
import "./Doacao.css"
import { AiOutlineLine } from "react-icons/ai";
function Doacao() {

    const [copiadoCelular, setCopiadoCelular] = useState(false);
    const [copiadoEmail, setCopiadoEmail] = useState(false);
    const [copiadoCNPJ, setCopiadoCNPJ] = useState(false);

    function handleCopiarTexto(copiarFuncao) {
        copiarFuncao(true);
        setTimeout(() => {
            copiarFuncao(false);
        }, 1500);
    }

    return (
        <section className="doarContainer">
            <div className="doarTxt">
             
                    <h1>Financie o projeto!</h1>
              
                <div className="iconD">
                    <AiOutlineLine />
                </div>

                <p>
                    Aqui você pode fazer a diferença na vida de muitas pessoas através da sua doação.
                    Temos duas opções para que você possa ajudar: doando diretamente para uma das ONGs parceiras que trabalhamos ou apoiando o nosso projeto Alô Comunidades.

                    <p>No mapa da página inicial, você poderá visualizar as ONGs parceiras e escolher aquela que você mais se identifica.

                        Já no projeto Alô Comunidades, nós escolhemos mensalmente algumas ONGs para ajudar financeiramente. A quantidade de ONGs que poderá ser ajudada depende da ajuda financeira recebida por nós. Ao doar para o projeto Alô Comunidades, você está contribuindo para que mais ONGs recebam o nosso apoio e, consequentemente, mais pessoas sejam ajudadas.
                    </p>
                    <p>Esperamos que você possa nos ajudar nessa missão de tornar o mundo um lugar melhor. Qualquer quantia é bem-vinda e fará a diferença na vida de muitas pessoas. Agradecemos desde já a sua contribuição!
                    </p>
                </p>
            </div>

            <div className="doarConteudo">
                <img src="./src/assets/img/pix.png" className="pixLogo" />
                <h3 className="infoPix">Organização Social Alô Comunidades </h3>

                <p className="chavePix">Celular <br />
                    <strong>(21) 99999-9999</strong>
                    <button className="copiarInfo" onClick={() => {
                        handleCopiarTexto(setCopiadoCelular);
                        navigator.clipboard.writeText("(21) 99999-9999")
                    }}>
                        <FaCopy />
                    </button>
                    {copiadoCelular && (
                        <span className="mensagemSucesso"><FaCheck /> Copiado!</span>
                    )}
                </p>

                <p className="chavePix">E-mail <br />
                    <strong>alocomunidade@gmail.com</strong>
                    <button className="copiarInfo" onClick={() => {
                        handleCopiarTexto(setCopiadoEmail);
                        navigator.clipboard.writeText("alocomunidade@gmail.com")
                    }}>
                        <FaCopy />
                    </button>
                    {copiadoEmail && (
                        <span className="mensagemSucesso"><FaCheck /> Copiado!</span>
                    )}
                </p>

                <p className="chavePix">CNPJ <br />
                    <strong>00.001.001/0001-01</strong>
                    <button className="copiarInfo" onClick={() => {
                        handleCopiarTexto(setCopiadoCNPJ);
                        navigator.clipboard.writeText("00.001.001/0001-01")
                    }}>
                        <FaCopy />
                    </button>
                    {copiadoCNPJ && (
                        <span className="mensagemSucesso"><FaCheck /> Copiado!</span>
                    )}
                </p>
            </div>
        </section >

    )
}

export default Doacao;