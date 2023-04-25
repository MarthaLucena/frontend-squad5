import ContatoDAO from '../DAO/ContatoDAO.js'
import Contato from '../models/Contato.js'

class contatoController {
    static rotas(app) {
        app.get("/contato", contatoController.listar)
        app.post("/contato", contatoController.inserir)
        app.get("/contato/:email", contatoController.filtrarPorEmail)
        app.delete("/contato/:email", contatoController.apagarContato)
        app.put("/contato/id/:id", contatoController.atualizarContato)
    }


    //GET - Listagem dos contatos
    static async listar(req, res) {
        const resultado = await ContatoDAO.listar()
        res.send(resultado)
    }

    //POST - Adição de contatos
    static async inserir(req, res) {
        const contato = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            comentario: req.body.comentario
        }

        if (!contato || !contato.nome || !contato.sobrenome || !contato.email || !contato.comentario) {
            res.status(400).send("Precisa passar as informações")
            return
        }

        const result = await ContatoDAO.inserir(contato)

        if (result.erro) {
            res.status(500).send(result)
        }

        res.status(201).send({ "Mensagem": "Novo contato adicionado." })

    }

    //GET -- Fazer busca pela ID

    static async filtrarPorEmail(req, res) {
        const contato = await ContatoDAO.buscarPorEmail(req.params.email)

        if (!contato) {
            res.status(404).send("Contato não encontrado")
        }
        res.status(200).send(contato)
    }

    //DELETE -- Deletar um Contato por Email

    static async apagarContato(req, res) {
        const contato = await ContatoDAO.buscarPorEmail(req.params.email)

        if (!contato) {
            res.status(404).send("Contato não encontrado")
            req
        }

        const result = await ContatoDAO.deletar(req.params.email)
        
        if (!result) {
            res.status(400).send({ 'Mensagem': 'Contato não deletado' })
            return
        }
        res.status(200).send(result)
    }
    //PUT --Atualizar um contato
    static async atualizarContato(req, res){
        const id = await ContatoDAO.buscarPorID(req.params.id)
        if(!id){
            res.status (404).send('Contato não encontrado')
            a
        }

        const contato = new Contato (
            req.body.nome, 
            req.body.sobrenome, 
            req.body.email, 
            req.body.comentario)

        if (!contato || !contato.nome || !contato.sobrenome || !contato.email || !contato.comentario ){
                res.status(400).send("Precisa passar todas as informações")
                return
            }

            if (!Object.keys(contato).length){
                res.status(400).send('O objeto está sem chave')
                return
            }

            const result = await ContatoDAO.atualizar(req.params.id, contato)

            if (result.erro){
                res.status(500).send('Erro ao atualizar o Contato')
                return
            }
            res.status(200).send({"Mensagem": "Dados atualizados", "Contato: ": contato})
    }

}

export default contatoController