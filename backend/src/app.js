// Importando o packages
import express from 'express'
import cors from 'cors'

// instanciando o servidor
const app = express()


app.use(cors());

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// importando os controllers
import usuarioController from './controllers/usuarioController.js';
import adminController from './controllers/adminController.js';
import contatoController from './controllers/contatoController.js';
import imagensController from './controllers/imagensController.js';
import noticiasController from './controllers/noticiasController.js';
import parceirosController from './controllers/parceirosController.js';

usuarioController.rotas(app)
adminController.rotas(app)
contatoController.rotas(app)
imagensController.rotas(app)
noticiasController.rotas(app)
parceirosController.rotas(app)

export default app