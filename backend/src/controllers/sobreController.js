// Importa o bd.js para poder usar o banco de dados simulado
import SobreDAO from "../DAO/SobreDAO.js"
import Sobre from "../models/Sobre.js"

class sobreController {
    static rotas(app){
        // Rota para o recurso sobre
        app.get('/sobre', sobreController.listar)
        app.post('/sobre', sobreController.inserir)
        app.get("/sobre/id/:id", sobreController.filtrarPorId)
        app.delete("/sobre/id/:id", sobreController.apagarSobre)
        app.put("/sobre/id/:id", sobreController.atualizarSobre)
    }

    // GET -- Listar todos
    static async listar(req, res){
        const resultado = await SobreDAO.listar()
        res.send(resultado)
    }

    // POST  --  Criar um novo
    static async inserir(req, res) {
        const sobre = {
            titulo: req.body.titulo,
            texto: req.body.texto 
    }

    if (!sobre || !sobre.titulo || !sobre.texto) {
        res.status(400).send("Precisa passar as informações")
        return
    }


    const result = await SobreDAO.inserir(sobre)


    if (result.erro) {
        res.status(500).send(result)
    }

    res.status(201).send({ "Mensagem": "Criado com sucesso", "Novo texto: ": sobre })
}



 // GET -- BUSCAR POR NOME
 static async filtrarPorId(req, res){
    const sobre = await SobreDAO.buscarPorID(req.params.id)

    if (!sobre) {

        res.status(404).send("não encontrado")
    }

    res.status(200).send(sobre)      
}


// DELETE -- Deletar pelo ID

static async apagarSobre(req, res){
    const sobre = await SobreDAO.buscarPorID(req.params.id)

    if(!sobre){
        res.status(404).send("Não encontrado")
        return
    }

    const result = await SobreDAO.deletar(req.params.id)

    if(result.erro){
         res.status(400).send({ 'Mensagem': 'Não deletado' })
         return
    }

    res.status(200).send(result)
 }


// PUT -- Atualizar
static async atualizarSobre(req, res) {
    const id = await SobreDAO.buscarPorID(req.params.id)
    if (!id) {
        res.status(404).send('não encontrado')
        return
    }

    const sobre = new Sobre (
        req.body.titulo,
        req.body.texto)

    if (!sobre || !sobre.titulo || !sobre.texto) {
        res.status(400).send("Precisa passar todas as informações")
        return
    }

    if (!Object.keys(sobre).length) {
        res.status(400).send('O objeto está sem chave')
        return
    }

    const result = await SobreDAO.atualizar(req.params.id, sobre)

    if (result.erro) {
        res.status(500).send('Erro ao atualizar')
        return
    }

    res.status(200).send({ "Mensagem": "Dados atualizados", "Texto:": sobre })

} 
}

export default sobreController
