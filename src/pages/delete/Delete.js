import React, { useState } from 'react'
import Api from '../../api/api'
import { Link, useHistory } from 'react-router-dom';
import './delete.css'

const Delete = (props) => {
  const id = props.tarefa._id;
  const history = useHistory();
  const [modalDelete, setModalDelete] = useState(false)

  const handleModal = () => {
    setModalDelete(!modalDelete)
  } 

  const deleteTarefaById = async () => {
    await Api.delete(`tarefas/${id}`).then((response) => {
      console.log("Tarefa deleted")
      history.push('/')
    })
  }
  console.log("Modal Delete", modalDelete)
  return (
    <div>
      <Link to={`/tarefas/${id}`}>
        <button onClick={handleModal} className="btn-padrao">Excluir</button>
      </Link>     
      {modalDelete 
      ?
      <div className="bloco-modal">
        <div className="modalDelete">
          <div className="modalClose">
            <button className="btn-close" onClick={handleModal}>X</button>

          </div>
          <div className="modalMsg">
            <p>Deseja realmente excluir a tarefa?</p>
          </div>
          <div>
            <button className="btn-padrao" onClick={deleteTarefaById}>
              Sim
            </button>
            <button className="btn-padrao" onClick={handleModal}>
              Não
            </button>
          </div>

        </div>
      </div>
      :
      null}
    </div>
  )
}

export default Delete
