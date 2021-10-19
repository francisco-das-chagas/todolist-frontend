import React, { useEffect, useState } from 'react'
import Api from '../../api/api';
import './view.css'
import Delete from '../delete/Delete'
import { Link } from 'react-router-dom';
import { format, addDays } from 'date-fns'


const View = (props) => {
  const [tarefa, setTarefa] = useState({})

  const id = props.match.params.id;
  
  console.log('Id: ', id)
  useEffect(() => {
    getTarefaById();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getTarefaById = async () => {
    await Api.get(`tarefas/${id}`).then((response) => {
      setTarefa(response.data);
    })
  }


  return (
    <div className="view">
      <h3 className='viewItem'>Titulo: {tarefa.titulo}</h3>
      <h3 className='viewItem'>Descrição: {tarefa.desc}</h3>
      <h3 className='viewItem'>Prioridade: {tarefa.prioridade}</h3>
      <h3 className='viewItem'>Status: {tarefa.status}</h3>
      <h3 className='viewItem'>Prazo: { tarefa.prazo ?  format(addDays(new Date(tarefa.prazo),1), 'dd/MM/yyyy') : "" }</h3>
      <h3 className='viewItem'>Data Criação: {tarefa.dataCriacao}</h3>
      <div className='bloco-button'>
        <Delete tarefa={tarefa}/>
        <Link to={`/edit/${id}`}>
         <button className="btn-padrao">Editar</button>
        </Link>
      </div>
    </div>
  )
}

export default View
