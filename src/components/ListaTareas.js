import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({ tareas, cambiarEstadoIsCompleted, eliminarTarea, setEditarTarea, editarTarea, isActive }) => {
    return (
        <div>
            {tareas.length === 0 ? <h2>Agrega una tarea</h2> : <h2>Estas son tus tareas</h2>}
            <div className="d-grid-list">
                {tareas.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        cambiarEstadoIsCompleted={cambiarEstadoIsCompleted}
                        eliminarTarea={eliminarTarea}
                        setEditarTarea={setEditarTarea}
                        isActive={isActive}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListaTareas
