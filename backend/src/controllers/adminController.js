// Importa o bd.js para poder usar o banco de dados simulado
import AdminDAO from "../DAO/AdminDAO.js"
import Admin from "../models/Admin.js"

class adminController {
    static rotas(app){
        // Rota para o recurso Admin
        app.get("/Admin", adminController.listar)
        app.post("/Admin", adminController.inserir)
        app.get("/Admin/:id", adminController.buscarPorID)
        app.post('/Admin/Login', adminController.login)
        app.delete("/Admin/:id", adminController.apagarAdmin)
        app.put("/Admin/:id", adminController.atualizaradmin)
    }
    
    // GET -- Listar todos os Administradores
    static async listar(req, res){
        const resultado = await AdminDAO.listar()
        res.send(resultado)
  
    }

    static async login(req, res) {
        const { email, password } = req.body

        try {
            const admin = await AdminDAO.buscarAdmin(email, password);

            if (!admin) {
                res.status(401).send('Email ou senha inválidos');
            } else {
                const token = 'token_de_autenticacao';
                res.cookie('token', token);
                res.send(admin);
            }
        } catch(err) {
            console.log(err);
            res.status(500).send('Erro ao realizar login');
        }
    }
    
    
    // POST  --  Criar um novo Administrador
    static async inserir(req, res) {
        const admin = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        if (!admin || !admin.username || !admin.email || !admin.password) {
            res.status(400).send("Precisa passar as informações")
            return
        }


        const result = await AdminDAO.inserir(admin)


        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Administrador criado com sucesso", "Novo administrador: ": admin })
    }

    // GET por ID
    static async buscarPorID(req, res){
        const admin = await AdminDAO.buscarID(req.params.id)

        if (!admin) {

            res.status(404).send("Administrador não encontrado")
        }

        res.status(200).send(admin)      
    }
    
    // DELETE -- Deletar um Administrador pelo email
    static async apagarAdmin(req, res){
       const admin = await AdminDAO.buscarID(req.params.id)

       if(!admin){
           res.status(404).send("Administrador não encontrado")
           return
       }

       const result = await AdminDAO.deletar(req.params.id)

       if(result.erro){
            res.status(400).send({ 'Mensagem': 'Administrador não deletado' })
            return
       }

       res.status(200).send(result)
    }

    // PUT -- Atualizar um usuário
    static async atualizaradmin(req, res) {
        const id = await AdminDAO.buscarID(req.params.id)
        if (!id) {
            res.status(404).send('admin não encontrado')
            return
        }

        const admin = new Admin(req.body.username, req.body.email, req.body.password)

        if (!admin || !admin.username || !admin.email || !admin.password) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }

        if (!Object.keys(admin).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }

        const result = await AdminDAO.atualizar(req.params.id, admin)

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o Administrador')
            return
        }

        res.status(200).send({ "Mensagem": "Dados atualizados", "Administrador: ": admin })

    }      
}

export default adminController