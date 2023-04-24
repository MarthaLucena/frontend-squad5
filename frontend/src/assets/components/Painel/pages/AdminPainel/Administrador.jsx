import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import styles from "./Administrador.css";

class Administrador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      username: "",
      email: "",
      password: "",
      administrador: [],
      modalAberta: false,
    };
  }

  componentDidMount() {
    this.buscarAdmin();
  }

  componentWillUnmount() {}

  buscarAdmin() {
    fetch("http://localhost:3000/Admin/")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ administrador: dados });
      });
  }

  deletarAdmin = (id) => {
    fetch("http://localhost:3000/Admin/" + id, { method: "DELETE" })
      .then((res) => {
        console.log(res.status);
        if (res.ok) {
          this.buscarAdmin();
        } else {
          throw new Error("Erro ao excluir admin");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  carregarAdmin = (id) => {
    fetch("http://localhost:3000/Admin/" + id, { method: "GET" })
      .then((resposta) => resposta.json())
      .then((admin) => {
        this.setState({
          id: admin.ID,
          username: admin.username,
          email: admin.email,
          password: admin.password,
        });
        this.abrirModal();
      });
  };

  atualizarAdmin = (admin) => {
    fetch("http://localhost:3000/Admin/" + admin.id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(admin),
    }).then((res) => {
      if (res.ok) {
        this.buscarAdmin();
      } else {
        console.error("Erro ao atualizar o admin:", res.status, res.statusText);
      }
    });
  };

  cadastraAdmin = (admin) => {
    fetch("http://localhost:3000/Admin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => {
        console.log(res.status);
        if (res.ok) {
          this.buscarAdmin();
          this.setState({
            username: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  renderTabela() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.administrador.map((admin) => {
            return (
              <tr key={admin.ID}>
                <td>{admin.ID}</td>
                <td>{admin.username}</td>
                <td>{admin.email}</td>
                <td>
                  <Button
                    className="BtnAtualizar"
                    onClick={() => this.carregarAdmin(admin.ID)}
                  >
                    Atualizar
                  </Button>
                  <Button
                    className="BtnExcluir"
                    onClick={() => this.deletarAdmin(admin.ID)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  atualizaUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  atualizaEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  atualizaSenha = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault(); // impede que o comportamento padrão de submissão do formulário ocorra
    if (this.state.id == 0) {
      const admin = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      this.cadastraAdmin(admin);
    } else {
      const admin = {
        id: this.state.id,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      this.atualizarAdmin(admin);
    }
    this.fecharModal(event)
  };

  reset = (event) => {
    event.preventDefault();
    this.setState({
      id: 0,
      username: "",
      email: "",
      password: "",
    });
  };

  fecharModal = (e) => {
    e.preventDefault();
    this.setState({
      modalAberta: false,
      id: 0,
      username: "",
      email: "",
      password: "",
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
                <h2>Modal heading</h2>
                <form class="form-container">
                  <label>
                    ID:
                    <input type="text" value={this.state.id} readOnly={true} />
                  </label>
                  <label>
                    Nome:
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.atualizaUsername}
                    />
                  </label>
                  <br />
                  <label>
                    Email:
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.atualizaEmail}
                    />
                  </label>
                  <br />
                  <label>
                    Senha:
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.atualizaSenha}
                    />
                  </label>
                  <br />
                </form>
                <div className="Btns">
                  <button className="novo" type="submit" onClick={this.fecharModal}>Fechar</button>
                  <button className="novo" type="submit" onClick={this.submit}>
                      Enviar
                    </button>
                </div>
              </div>
            </div>
          )}
        </>
          <button className="novo" type="submit" onClick={this.abrirModal}>
            Novo
          </button>

        {this.renderTabela()}
      </div>
    );
  }
}

export default Administrador;
