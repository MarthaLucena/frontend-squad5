import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portal.css";

export default function Portal() {
  const [contato, setContatos] = useState(true);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  // Função para enviar o formulario
  async function handleSubmitContato(event) {
    event.preventDefault();
    setTimeout(() => {
      window.location.reload();
    }, 500);
    const formData = { nome, sobrenome, email, comentario };

    try {
      const response = await fetch("http://localhost:3000/Contatos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      alert("Mensagem Enviada com sucesso, Aguarda um retorno!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <div className="titulo-form">
          <h1>Portal de Reclamações</h1>
          <div className="linha_horizontal"></div>
        </div>
        <div className="box-form">
          <div className="box-outros">
            <div className="subtitulo-form">
              <h2>Siga nossas redes</h2>
            </div>
            <ul>
              <i className="icon">
                <FaFacebook />
              </i>
              <i className="icon">
                <FaTwitter />
              </i>
              <i className="icon">
                <FaInstagram />
              </i>
            </ul>
          </div>
          <form className="form" onSubmit={handleSubmitContato}>
            <div className="subtitulo-form">
              <h2>CONTATE-NOS</h2>
            </div>
            <div className="form-box">
              <input type="text" placeholder="Nome" required value={nome} onChange={(event) => setNome(event.target.value)} />
              <input type="text" placeholder="Sobrenome" required value={sobrenome} onChange={(event) => setSobrenome(event.target.value)} />
              <input type="text" placeholder="E-mail" required value={email} onChange={(event) => setEmail(event.target.value)} />
              <textarea
                placeholder="Digite sua mensagem..."
                cols="30"
                rows="5"
                required value={comentario} onChange={(event) => setComentario(event.target.value)} 
              ></textarea>
              <div className="button-form">
                <button role="button">Enviar Mensagem</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
