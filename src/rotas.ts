import { Router } from 'express';
import { atualizarStatus, criar, excluir, frase, listar } from './controladorDeTarefa';

const rotas = Router()


rotas.get('/', frase)
rotas.post('/tarefas',criar )
rotas.get('/tarefas', listar)
rotas.patch('/tarefas/:id', atualizarStatus)
rotas.delete('tarefas/:id', excluir)








export default rotas