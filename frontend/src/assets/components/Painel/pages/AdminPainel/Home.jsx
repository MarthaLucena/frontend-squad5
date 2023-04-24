import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "react-bootstrap/Button";
import { Context } from "../../../../../../../Context/AuthContext";

function Home() {
  const {
    email,
    setEmail,
    password,
    setSenha,
    infoUsuario,
    setInfoUsuario,
    infoAdmin,
    setInfoAdmin,
    isLogado,
  } = useContext(Context);
  const imageUrl = "https://img.icons8.com/color/512/user.png";
  const history = useHistory(); // Obter objeto history

  function handleDeslogar() {
    isLogado(false);
    setEmail("");
    setSenha("");
    setInfoUsuario({});
    setInfoAdmin({});
    history.push("/login"); // Redirecionar para a página de login
  }

  // Função para gerar frases aleatórias
    // Função para gerar frases aleatórias
    const frases = [
        "Nunca é tarde demais para ser o que você poderia ter sido.",
        "Acredite em si mesmo e tudo será possível.",
        "Você não é derrotado quando perde. Você é derrotado quando desiste.",
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "Nunca é tarde demais para ser o que você poderia ter sido.",
        "Acredite em si mesmo e tudo será possível.",
        "Você não é derrotado quando perde. Você é derrotado quando desiste.",
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
        "A verdadeira liberdade é ser capaz de seguir seu próprio caminho, mesmo quando todos os outros estão seguindo o deles.",
        "O maior fracasso é nunca tentar.",
        "A vida é uma jornada, e se você cair no caminho, levante e continue andando.",
        "A persistência é o caminho do êxito.",
        "Não espere por oportunidades, crie-as.",
        "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
        "Nada é impossível, a palavra mesma diz: “eu sou possível”.",
        "Um sonho não se torna realidade através da mágica; exige suor, determinação e trabalho duro.",
        "Para ter sucesso, seu desejo de sucesso deve ser maior do que seu medo do fracasso.",
        "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que faz, você será bem sucedido.",
        "Não deixe que o medo de perder seja maior que a emoção de ganhar.",
        "Acredite em si mesmo, arrisque e vá à luta. O sucesso é o seu destino!",
        "O fracasso é apenas a oportunidade de recomeçar de novo, desta vez de forma mais inteligente.",
        "A motivação nos impulsiona a começar e o hábito nos permite continuar."
      ];
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  // Definir totalizadores para usuários, notícias, parceiros e imagens
  const totalUsuarios = 100;
  const totalNoticias = 25;
  const totalParceiros = 10;
  const totalImagens = 50;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerEsquerdo}>
          <h2>Informações Pessoais</h2>
          <div className={styles.containerInfo}>
            <div className={styles.containerInfo1}>
              <img src={imageUrl} className="fotoPerfil" />
              <p>
                <b>Nome:</b>{" "}
                {Object.keys(infoUsuario).length === 0
                  ? infoAdmin.username
                  : infoUsuario.username}
              </p>
              <p>
                <b>Telefone:</b> (21) 98765-4321
              </p>
              <p>
                <b>Email:</b>{" "}
                {Object.keys(infoUsuario).length === 0
                  ? infoAdmin.email
                  : infoUsuario.email}
              </p>
            </div>
            <div className={styles.containerInfo2}></div>
          </div>
        </div>
        <div className={styles.containerDireito}>
          <div className={styles.totalizadores}>
            <div className={styles.totalizador}>
              <p>Total de Usuários</p>
              <p>{totalUsuarios}</p>
            </div>
            <div className={styles.totalizador}>
              <p>Total de Notícias</p>
              <p>{totalNoticias}</p>
            </div>
            <div className={styles.totalizador}>
              <p>Total de Parceiros</p>
              <p>{totalParceiros}</p>
            </div>
            <div className={styles.totalizador}>
              <p>Total de Imagens</p>
              <p>{totalImagens}</p>
            </div>
          </div>
          <div className={styles.fraseAleatoria}>
            <p>{fraseAleatoria}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

