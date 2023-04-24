import db from "../infra/db.js";
import Usuario from "../models/Usuario.js";

class UsuarioDAO {

    // GET -- Listar todos os usuários
    static listar() {
        const query = "SELECT * FROM Usuario"
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }
     
    // POST  --  Criar um novo usuário
    static inserir(usuario){
         const query = `INSERT INTO Usuario (username, email, password) VALUES (?, ?, ?)`;

         return new Promise((resolve, reject) => {
             db.run(query, [usuario.username, usuario.email, usuario.password], (err) =>{
                if (err){
                     reject({
                        mensagem: "Erro ao inserir o usuário",
                        error:err,
                   });
               }
              resolve(usuario);
           });
       });
    }
    
    // GET -- BUSCAR POR EMAIL
    static buscarPorID(id) {
      const query = "SELECT * FROM Usuario WHERE id = ?";
      return new Promise((resolve, reject) => {
        db.get(query, [id], (err, row) => {
          if (err) {
            reject(false);
          }
          resolve(row);
        });
      });
    }

    static buscarUsuario(email, password) {
      const query = "SELECT * FROM Usuario WHERE email = ? AND password = ?";

      return new Promise((resolve, reject) => {
        db.get(query, [email, password], (err, row) => {
          if (err) {
            reject(err);
          } else if (!row) {
            resolve(null);
          } else {
            const usuario = new Usuario(row.username, row.email, row.password);
            usuario.username = row.username;
            usuario.email = row.email;
            usuario.password = row.password;
            resolve(usuario);
          }
        })
      })
    }

    static buscarPorID(id) {
        const query = "SELECT * FROM Usuario WHERE id = ?";
        return new Promise((resolve, reject) => {
          db.get(query, [id], (err, row) => {
            if (err) {
              reject(false);
            }
            resolve(row);
          });
        });
      }

  // PUT  --  
  static atualizar(id, usuario){
    const query =
    "UPDATE Usuario SET username = ?, email = ?, password = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [usuario.username, usuario.email, usuario.password, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar o usuário",
              erro: err,
            });
          }
          resolve({
            mensagem: "Usuário atualizado com sucesso"
          });
        }
      );


    });
  }   

    // DELETE -- Deletar um usuário pelo Email
    static deletar(email){
        const query = "DELETE FROM Usuario WHERE email = ?";
        return new Promise((resolve,reject) =>{
          db.run(query, [email], (err) =>{
            if(err){
              reject({
                mensagem: "Erro ao deletar o seu usuário",
                erro: err,
              });
            }
            resolve({mensagem: "Usuário deletado com sucesso", email: email});
          });
        });
      }   
}

export default UsuarioDAO