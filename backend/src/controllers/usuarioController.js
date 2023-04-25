// Importa o bd.js para poder usar o banco de dados simulado
import UsuarioDAO from "../DAO/UsuarioDAO.js";
import Usuario from "../models/Usuario.js"

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/Usuario', usuarioController.listar)
        app.post('/Usuario', usuarioController.inserir)
        app.get("/Usuario/:id", usuarioController.filtrarPorID)
        app.post('/Usuario/login', usuarioController.login)
        app.delete("/Usuario/:id", usuarioController.apagarUsuario)
        app.put("/Usuario/:id", usuarioController.atualizarUsuario)
    }
    
    // GET -- Listar todos os usuários
    static async listar(req, res){
        const resultado = await UsuarioDAO.listar()
        res.send(resultado)
  
    }
    
    // POST  --  Criar um novo usuário
    static async inserir(req, res) {
        const usuario =  new Usuario (
            req.body.username,
            req.body.email,
            req.body.password,
        )
        
        if (!usuario || !usuario.username || !usuario.email || !usuario.password) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await UsuarioDAO.inserir(usuario)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "usuario criado com sucesso", "Novo usuario: ": usuario })
    }

    //LOGIN
    static async login(req, res) {
        const { email, password } = req.body
      
        try {
            const usuario = await UsuarioDAO.buscarUsuario(email, password);
      
            if (!usuario) {
                    res.status(401).send('Email ou senha inválidos');
            } else {
                    const token = 'token_de_autenticacao';
                    res.cookie('token', token);
                    res.send(usuario);
            }
            } catch(err) {
                console.log(err);
                res.status(500).send('Erro ao realizar login');
            }
    }

    // GET -- BUSCAR POR ID
    static async filtrarPorID(req, res){
        const usuario = await UsuarioDAO.buscarID(req.params.id)
        if (!usuario) {
            res.status(404).send("Cliente não encontrado")
            return
        }
        res.status(200).send(usuario)
    }
    
    
    // DELETE -- Deletar um usuário pelo email
    static async apagarUsuario(req, res){
       const usuario = await UsuarioDAO.buscarID(req.params.id)

       if(!usuario){
           res.status(404).send("Usuário não encontrado")
           return
       }

       const result = await UsuarioDAO.deletar(req.params.id)

       if(result.erro){
            res.status(400).send({ 'Mensagem': 'Usuário não deletado' })
            return
       }

       res.status(200).send(result)
    }
    // PUT -- Atualizar um usuário
    static async atualizarUsuario(req, res) {
        const id = await UsuarioDAO.buscarID(req.params.id)
        if (!id) {
            res.status(404).send('usuario não encontrado')
            return
        }

        const usuario = new Usuario(req.body.username, req.body.email, req.body.password)



        if (!usuario || !usuario.username || !usuario.email || !usuario.password) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(usuario).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await UsuarioDAO.atualizar(req.params.id, usuario)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o usuario')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "usuario: ": usuario })

    }      
}

export default usuarioController
