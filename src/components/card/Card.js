import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'

export const Card = (props) => {
  const tarefa = props.tarefas;
  return (
    <div className="card">
      <Link to={`/tarefas/${tarefa._id}`} className="cardLink">
        <div className="cardTitulo">
          <h4>{tarefa.status}</h4>
        </div>
        <div className="cardStatus">
          <h3>{tarefa.titulo}</h3>
        </div>
        <div className="cardFooter">
          <h4>{tarefa.prioridade}</h4>
        </div>
      </Link>
    </div>
  )
}


