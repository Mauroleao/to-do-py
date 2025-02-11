// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    useEffect(() => {
        fetchTarefas();
    }, []);

    const fetchTarefas = async () => {
        const response = await fetch('http://localhost:8000/api/tarefas/');
        const data = await response.json();
        setTarefas(data);
    };

    const criarTarefa = async () => {
        if (novaTarefa.trim() === '') return;
        await fetch('http://localhost:8000/api/tarefas/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: novaTarefa, concluida: false }),
        });
        setNovaTarefa('');
        fetchTarefas();
    };

    const toggleConcluida = async (id, concluida) => {
        const tarefaAtualizada = tarefas.find(tarefa => tarefa.id === id);
        const dadosAtualizados = {
            ...tarefaAtualizada,
            concluida: !concluida
        };

        await fetch(`http://localhost:8000/api/tarefas/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosAtualizados),
        });
        fetchTarefas();
    };

    const deletarTarefa = async (id) => {
        await fetch(`http://localhost:8000/api/tarefas/${id}/`, {
            method: 'DELETE',
        });
        fetchTarefas();
    };

    return (
        <div className="App">
            <ul>
                <li><h1>Lista de Tarefas</h1></li>
<div>
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Adicionar tarefa"
                />
                <button onClick={criarTarefa}>Adicionar</button>
            </div>

                    {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        <input
                            type="checkbox"
                            checked={tarefa.concluida}
                            onChange={() => toggleConcluida(tarefa.id, tarefa.concluida)}
                        />
                        <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                            {tarefa.titulo}
                            
                        </span>
                        <button onClick={() => deletarTarefa(tarefa.id)}>Deletar</button> {/* Botão de Deletar à esquerda */}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default App;
