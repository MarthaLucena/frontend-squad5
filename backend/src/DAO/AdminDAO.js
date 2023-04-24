import db from "../infra/db.js";
import Admin from "../models/Admin.js";

class AdminDAO {

    // GET -- Listar todos os Administradores
    static listar() {
        const query = "SELECT * FROM ADMIN"
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }
     
    // POST  --  Criar um novo Administrador
    static inserir(admin){
         const query = `INSERT INTO Admin (username, email, password) VALUES (?, ?, ?)`;

         return new Promise((resolve, reject) => {
             db.run(query, [admin.username, admin.email, admin.password], (err) =>{
                if (err){
                     reject({
                        mensagem: "Erro ao inserir o Administrador",
                        error:err,
                   });
               }
              resolve(admin);
           });
       });
    }

      //Buscar por email e senha
  static buscarAdmin(email, password) {
    const query = "SELECT * FROM Admin WHERE email = ? AND password = ?";

    return new Promise((resolve, reject) => {
      db.get(query, [email, password], (err, row) => {
        if (err) {
          reject(err);
        } else if (!row) {
          resolve(null);
        } else {
          const admin = new Admin(row.username, row.email, row.password);
          admin.username = row.username;
          admin.email = row.email;
          admin.password = row.password;
          resolve(admin);
        }
      })
    })
  }
    
    // GET -- Buscar por ID
    static buscarID(id){
      const query = "SELECT * FROM Admin WHERE id = ?";
      return new Promise((resolve, reject) => {
        db.get(query, [id], (err, row) => {
          if (err) {
            reject(false);
          }
          resolve(row);
        });
      });
    }

    static buscarPorID(id) {
        const query = "SELECT * FROM Admin WHERE id = ?";
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
  static atualizar(id, admin){
    const query =
    "UPDATE Admin SET username = ?, email = ?, password = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [admin.username, admin.email, admin.password, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar o Administrador",
              erro: err,
            });
          }
          resolve({
            mensagem: "Administrador atualizado com sucesso"
          });
        }
      );


    });
  }   

    // DELETE -- Deletar um Administrador pelo Email
    static deletar(id){
        const query = "DELETE FROM Admin WHERE id = ?";
        return new Promise((resolve,reject) =>{
          db.run(query, [id], (err) =>{
            if(err){
              reject({
                mensagem: "Erro ao deletar o seu Administrador",
                erro: err,
              });
            }
            resolve({mensagem: "Administrador deletado com sucesso", id: id});
          });
        });
      }   
}

export default AdminDAO