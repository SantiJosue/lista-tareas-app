import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import Alerta from './Alerta';

const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState([]);
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(inputTarea.length === 0){
        cambiarEstadoAlerta(true);
        cambiarAlerta({
          mensaje: "Por favor ingrese una tarea."
        })
      } else {
        cambiarTareas([
          ...tareas,
          {
            id: uuidv4(),
            texto: inputTarea,
            completada: false
          }
        ])
        cambiarInputTarea("");
      }
    };
    
    return (
      <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
        <input
            type="text"
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
        />
        <button
            type="submit"
            className="formulario-tareas__btn">
            <FontAwesomeIcon
                icon={faPlusSquare}
                className='formulario-tareas__icono-btn'
            />
        </button>
        <Alerta 
          mensaje={alerta.mensaje}
          estadoAlerta={estadoAlerta}
          cambiarEstadoAlerta={cambiarEstadoAlerta}
        />
      </form>
    );
}
 
export default FormularioTareas;