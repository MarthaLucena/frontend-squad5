import db from "../infra/db.js";

class SobreDAO {

    // GET -- Listar todos
    static listar() {
        const query = "SELECT * FROM Sobre"
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }
     
    
    // GET -- BUSCAR POR ID
    static buscarPorID(id) {
      const query = "SELECT * FROM Sobre WHERE id = ?";
      return new Promise((resolve, reject) => {
        db.get(query, [id], (err, row) => {
          if (err) {
            reject(false);
          }
          resolve(row);
        });
      });
    }

      // POST  --  Criar um novo Sobre
      static inserir(sobre){
        const query = `INSERT INTO Sobre (titulo, texto) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(query, [sobre.titulo, sobre.texto], (err) =>{
               if (err){
                    reject({
                       mensagem: "Erro ao inserir o Sobre",
                       error:err,
                  });
              }
             resolve(sobre);
          });
      });
   }


  // PUT  --  atualizar um texto
  static atualizar(id, sobre){
    const query =
    "UPDATE Sobre SET titulo = ?, texto = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [sobre.titulo, sobre.texto, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar",
              erro: err,
            });
          }
          resolve({
            mensagem: "Atualizado com sucesso"
          });
        }
      );


    });
  }   

    // DELETE -- Deletar um texto
    static deletar(id){
        const query = "DELETE FROM Sobre WHERE id = ?";
        return new Promise((resolve,reject) =>{
          db.run(query, [id], (err) =>{
            if(err){
              reject({
                mensagem: "Erro ao deletar",
                erro: err,
              });
            }
            resolve({mensagem: "Deletado com sucesso", id: id});
          });
        });
      }   
}

export default SobreDAO