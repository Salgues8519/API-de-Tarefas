import { Request, Response } from "express";
import { tarefas } from "./BancoDeTarefas";
import { TTarefas } from "./BancoDeTarefas";
import { v4 as uuidv4 } from 'uuid';
export function frase(req:Request, res:Response ):any {
    return res.send('Servidor OK')
}

export function criar(req:Request, res:Response ):any{
    const {nome , duracao, status } =req.body
    if (!nome || !duracao){
        return res.status(400).json({
            mensagem: 'Verificar (nome ou tempo) Campos Obrigatorios'
        })
    }

    const novaTarefa:TTarefas ={
        id: uuidv4(),
        nome,
        duracao,
        status: false
    }

    tarefas.push(novaTarefa)
    return res.status (201).json({
        mensagem: 'Nova Tarefa criada'
    })
}

export function listar(req:Request, res:Response) {
    res.json(tarefas)

}

export function atualizarStatus(req:Request, res:Response):any {
    const {id} =req.params
    const{status} =req.body

    if (status === undefined) {
        return res.status(400).json({
            mensagem: "O campo 'status' é obrigatório."
        });
    }
    const tarefa = tarefas.find((tarefa) => tarefa.id === id)

    if (!tarefa) {
        return res.status(404).json({
            mensagem: "Tarefa não encontrada."
        });
    }
    tarefa.status = status
    return res.json({
        mensagem: `Status da tarefa atualizado para ${status ? 'concluído' : 'pendente'}`,
        tarefa
    });
}