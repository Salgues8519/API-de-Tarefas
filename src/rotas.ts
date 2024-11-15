import { Router } from 'express';
import { criar, frase, listar } from './controladorDeTarefa';

const rotas = Router()


rotas.get('/', frase)
rotas.post('/tarefas',criar )
rotas.get('/tarefas', listar)








export default rotas