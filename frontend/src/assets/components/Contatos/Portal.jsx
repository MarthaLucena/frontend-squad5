import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portal.css";

export default function Portal() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const postData = () => {
    axios.post(`http://localhost:3000/Contato`, {
      nome,
      sobrenome,
      email,
      comentario
    });
  };

  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    comentario: ""
  });

  const [emptyValue, SetEmptyValue] = useState(false);

  const handleChange = (e) => {
    let newProp = form;
    newProp[e.target.name] = e.targe.value;
    setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some((obj) => obj == "");
    SetEmptyValue(emptyValues);
  };

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
          <form
            className="form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="subtitulo-form">
              <h2>CONTATE-NOS</h2>
            </div>
            <div className="form-box">
              <input
                type="text"
                name='nome'
                placeholder="Nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Sobrenome"
                name='sobrenome'
                required
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                onBlur={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="E-mail"
                name='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => handleChange(e)}
              />
              <textarea
                placeholder="Digite sua mensagem..."
                cols="30"
                rows="5"
                name='comentario'
                required
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                onBlur={(e) => handleChange(e)}
              >{emptyValue && form["nome"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}</textarea>
              <div className="button-form">
                <button type="submit" onClick={postData}>
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
