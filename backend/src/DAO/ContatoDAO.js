import db from "../infra/db.js";

class ContatoDAO {

    //get -- Listar todos os Contatos
    static listar() {
        const query = "SELECT * FROM CONTATOS"
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }

    //POST -- Criar um novo contato
    static inserir(contato) {
        const query = `INSERT INTO CONTATOS (nome, sobrenome, email, comentario) VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(query, [contato.nome, contato.sobrenome, contato.email, contato.comentario], (err) => {
                if (err) {
                    reject({
                        mensagem: "Erro ao inserir o contato",
                        error: err
                    });
                }
                resolve(contato);
            });
        });
    }

    //GET -- BUSCAR POR EMAIL
    static buscarPorEmail(email){
        const query = "SELECT * FROM CONTATOS WHERE email = ?";
        return new Promise ((resolve, reject) =>{
            db.get(query, [email], (err, row)=>{
                if (err) {
                    reject (false);
                }
                resolve(row);
            });
        });
    }

    static buscarPorID(id){
        const query = "SELECT * FROM CONTATOS WHERE id =?";
        return new Promise ((resolve, reject) =>{
            db.get(query, [id], (err, row) =>{
                if (err){
                    reject (false);
                }
                resolve(row);
            });
        });
    } 

    //PUT -- Atualização do cadastro
    static atualizar(id, contato){
        const query = 
        "UPDATE CONTATOS SET nome = ?, sobrenome = ?, email = ?, comentario = ? WHERE id = ?";
        return new Promise ((resolve, reject) =>{
            db.run(
                query,
                [contato.nome, contato.sobrenome, contato.email, contato.comentario, id],
            (err) =>{
                if (err){
                    reject({
                        mensagem: "Erro ao atualizar o contato",
                        erro: err,
                    });
                }
                resolve({
                    mensagem: "Contato atualizado com sucesso"
                });
            }
            );

            
        });
    }

    //DELETE - Deletar um contato pelo email
    static deletar(email){
        const query = "DELETE FROM CONTATOS WHERE email =?";
        return new Promise((resolve, reject)=>{
            db.run(query, [email],(err) =>{
                if (err){
                    reject({
                        mensagem: "Erro ao deletar o seu Contato",
                        erro: err,
                    });
                }
                resolve({mensagem: "Contato deletado com sucesso", email: email});
            });
        });
    }
}

export default ContatoDAO