import { Request, Response } from "express";
import { tarefas } from "./BancoDeTarefas";

export function frase(req:Request, res:Response ):any {
    return res.send('Servidor OK')
}

export function criar(req:Request, res:Response ):any{
    const {nome , tempo } =req.body
    if (!nome || !tempo){
        return res.status(400).json({
            mensagem: 'Verificar (nome ou tempo) Campos Obrigatorios'
        })
    }

    const novaTarefa ={
        nome,
        tempo
    }

    tarefas.push(novaTarefa)
    return res.status (201).json({
        mensagem: 'Nova Tarefa criada'
    })
}

export function listar(req:Request, res:Response) {
    res.json(tarefas)

}