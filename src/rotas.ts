import { Router } from 'express';
import { atualizarStatus, criar, frase, listar } from './controladorDeTarefa';

const rotas = Router()


rotas.get('/', frase)
rotas.post('/tarefas',criar )
rotas.get('/tarefas', listar)
rotas.patch('/tarefas/:id', atualizarStatus)








export default rotas