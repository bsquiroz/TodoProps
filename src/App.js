import React, { useState } from 'react';
import Form from './components/Form'
import ListaTareas from './components/ListaTareas';
import Confirmacion from './components/Confirmacion'

const tareas = [
  { id: 1, name: "Naruto", des: "Ver naruto", isCompleted: false, active: false },
  { id: 2, name: "Goku", des: "Ver dragon ball z", isCompleted: false, active: false },
  { id: 3, name: "Note", des: "Ver death note", isCompleted: false, active: false },
]

function App() {
  const [stateTareas, setStateTareas] = useState(tareas);
  const [editarTarea, setEditarTarea] = useState(null)
  const [noError, setNoError] = useState(false);

  const AgregarTarea = (tarea) => {
    if (editarTarea) {
      const aux = stateTareas.map((task) => task.id === tarea.id ? tarea : task)
      setStateTareas(aux);
      setEditarTarea(null);

      //poner el mensaje de alerta diciendo que todo salio bien
      setNoError(true)
      setTimeout(() => {
        setNoError(false)
      }, 3000);
    } else {
      setStateTareas([
        tarea,
        ...stateTareas
      ])

      //poner el mensaje de alerta diciendo que todo salio bien
      setNoError(true)
      setTimeout(() => {
        setNoError(false)
      }, 3000);
    }
  }

  const cambiarEstadoIsCompleted = (task) => {
    task.isCompleted = !task.isCompleted
    const aux = stateTareas.map((tarea) => tarea.id === task.id ? task : tarea)
    setStateTareas(aux)
  }

  const eliminarTarea = (task) => {
    const aux = stateTareas.filter((tarea) => tarea.id !== task.id)
    setStateTareas(aux)
  }

  //funcion que cambia el estado de active a true o false
  const isActive = (task) => {
    const aux = stateTareas.map((tarea) => tarea.id === task.id ? { ...task, active: true } : { ...tarea, active: false })
    setStateTareas(aux);
  }

  const cancelEdit = () => {
    const aux = stateTareas.map((tarea) => tarea.id === editarTarea.id ? { ...tarea, active: false } : tarea)
    setStateTareas(aux);
    setEditarTarea(null);
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      {editarTarea
        ?
        <div className="center">
          <h2>Editando tarea</h2>
          <button
            onClick={() => cancelEdit()}
          >
            Cancelar edicción
          </button>
        </div>
        :
        <h2>Creando tarea</h2>
      }
      <Form
        AgregarTarea={AgregarTarea}
        editarTarea={editarTarea}
      />
      {noError ?
        editarTarea
          ?
          <Confirmacion
            msg={"Tarea modificada con exito"}
          />
          :
          <Confirmacion
            msg={"Tarea creada con exito"}
          />

        : null
      }
      <ListaTareas
        tareas={stateTareas}
        cambiarEstadoIsCompleted={cambiarEstadoIsCompleted}
        eliminarTarea={eliminarTarea}
        setEditarTarea={setEditarTarea}
        isActive={isActive}
      />
    </div>
  );
}

export default App;
