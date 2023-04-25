import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import "./Sobre.css";

class Sobre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      titulo: "",
      texto: "",
      sobre: [],
      modalAberta: false,
    };
  }

  componentDidMount() {
    this.buscarSobre();
  }

  componentWillUnmount() {}

  buscarSobre() {
    fetch("http://localhost:3000/Sobre/")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ sobre: dados });
      });
  }

  deletarSobre = (id) => {
    fetch("http://localhost:3000/Sobre/" + id, { method: "DELETE" })
      .then((res) => {
        console.log(res.status);
        if (res.ok) {
          this.buscarSobre();
        } else {
          throw new Error("Erro ao excluir sobre");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  carregarSobre = (id) => {
    fetch("http://localhost:3000/Sobre/" + id, { method: "GET" })
      .then((resposta) => resposta.json())
      .then((sobre) => {
        this.setState({
          id: sobre.ID,
          titulo: sobre.TITULO,
          texto: sobre.TEXTO,
        });
        this.abrirModal();
      });
  };

  atualizarSobre = (sobre) => {
    fetch("http://localhost:3000/Sobre/" + sobre.id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(sobre),
    }).then((res) => {
      if (res.ok) {
        this.buscarSobre();
      } else {
        console.error("Erro ao atualizar o sobre:", res.status, res.statusText);
      }
    });
  };

  cadastraSobre = (sobre) => {
    fetch("http://localhost:3000/Sobre", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(sobre),
    })
      .then((res) => {
        console.log(res.status);
        if (res.ok) {
          this.buscarSobre();
          this.setState({
            titulo: "",
            texto: "",
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  renderTabela() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Texto</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.sobre.map((sobre) => {
            return (
              <tr key={sobre.ID}>
                <td>{sobre.ID}</td>
                <td>{sobre.TITULO}</td>
                <td className="texto">{sobre.TEXTO}</td>
                <td>
                  <button
                    className="BtnAtualizar"
                    onClick={() => this.carregarSobre(sobre.ID)}
                  >
                    Atualizar
                  </button>
                  <button
                    className="BtnExcluir"
                    onClick={() => this.deletarSobre(sobre.ID)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  atualizaTitulo = (e) => {
    this.setState({
      titulo: e.target.value,
    });
  };

  atualizaTexto = (e) => {
    this.setState({
      texto: e.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault(); // impede que o comportamento padrão de submissão do formulário ocorra
    if (this.state.id == 0) {
      const sobre = {
        titulo: this.state.titulo,
        texto: this.state.texto,
      };

      this.cadastraSobre(sobre);
    } else {
      const sobre = {
        id: this.state.id,
        titulo: this.state.titulo,
        texto: this.state.texto,
      };

      this.atualizarSobre(sobre);
    }
    this.fecharModal(event);
  };

  reset = (event) => {
    event.preventDefault();
    this.setState({
      id: 0,
      titulo: "",
      texto: "",
    });
  };

  fecharModal = (e) => {
    e.preventDefault();
    this.setState({
      modalAberta: false,
      id: 0,
      titulo: "",
      texto: "",
    });
  };

  abrirModal = () => {
    this.setState({
      modalAberta: true,
    });
  };

  render() {
    return (
      <div>
        <>
          {this.state.modalAberta && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.fecharModal}>
                  &times;
                </span>
                <form class="form-sobre">
                  <label>
                    Titulo:
                    <input
                      type="text"
                      value={this.state.titulo}
                      onChange={this.atualizaTitulo}
                    />
                  </label>
                  <br />
                  <label>
                    Texto:
                    <textarea
                      className="textarea"
                      type="email"
                      value={this.state.texto}
                      onChange={this.atualizaTexto}
                    />
                  </label>
                  <br />
                </form>
                <div className="Btns">
                  <button
                    className="novo"
                    type="submit"
                    onClick={this.fecharModal}
                  >
                    Fechar
                  </button>
                  <button className="novo" type="submit" onClick={this.submit}>
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
        <div className="btnNovo">
          <button className="novo" type="submit" onClick={this.abrirModal}>
            Novo
          </button>
        </div>

        {this.renderTabela()}
      </div>
    );
  }
}

export default Sobre;
