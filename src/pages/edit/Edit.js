import React, { useEffect, useState } from 'react'
import Api from '../../api/api'
import { toast } from "react-toastify";
import { format, addDays } from 'date-fns'
import './edit.css'
import { useHistory } from 'react-router-dom';

const Edit = (props) => {
  const id = props.match.params.id;
  const history = useHistory();
  const [tarefa, setTarefa] = useState({})

  console.log('History: ', history)
  useEffect(() => {
    getTarefaById();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  const getTarefaById = async () => {
    await Api.get(`tarefas/${id}`).then((response) => {
      setTarefa(response.data);
    })
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api.put(`tarefas/${id}`, tarefa).then(() => {
      toast.success("Sucesso!");
      history.push(`/tarefas/${id}`);
    }).catch(() => {toast.error("Erro!");})
  }

  const handleChange = (evento) => {
    const auxTarefa = { ...tarefa };
    auxTarefa[evento.target.name] = evento.target.value;
    setTarefa(auxTarefa);
  }

  return (
    <div className="edit">
          <form onSubmit={handleSubmit}>
            <div className="formItems">
              <label>
                Titulo
              </label>
              <input name="titulo" type="text" className="field" value={tarefa.titulo} onChange={handleChange}
              required/>
            </div>
            <div className="formItems">
              <label>Descrição</label>
              <input name="desc" type="textarea" className="fieldTextArea"
              value={tarefa.desc}
              onChange={handleChange}/>
            </div>
            <div className="formItems">
              <label>Prioridade</label>
              <select name="prioridade" className="field" value={tarefa.prioridade}
              onChange={handleChange}
              required>
                <option ></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <div className="formItems">
              <label>Status</label>
              <select name="status" className="field"
              type="text" 
              value={tarefa.status}
              onChange={handleChange}
              required>
                <option >Selecione o status</option>
                <option value='Fazer'>Fazer</option>
                <option value='Fazendo'>Fazendo</option>
                <option value='Feito'>Feito</option>
              </select>
            </div>
            <div className="formItems">
              <label>Prazo</label>
              <input name="prazo" type="date" className="field" value={ tarefa.prazo ?  format(addDays(new Date(tarefa.prazo),1), 'yyyy-MM-dd') : "" }
              onChange={handleChange}
              required/>
            </div>
            <div>
              <button type="submit" 
              
              >
                Enviar
              </button>
            </div>
          </form>
  
    </div>
  )
}

export default Edit
