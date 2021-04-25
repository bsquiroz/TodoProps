import React from 'react'

const Tarea = ({ tarea, cambiarEstadoIsCompleted, eliminarTarea, setEditarTarea, isActive }) => {
    const { name, des, isCompleted, active } = tarea;

    const onclickEditarTarea = (tarea) => {
        setEditarTarea(tarea)
        isActive(tarea)
    }

    return (
        <div className={active ? "tarea-active" : "border-no-active"}>
            <div className="d-flex">
                <div>
                    <h4>{name}</h4>
                    <small><i>{des}</i></small>
                </div>
                <div>
                    {isCompleted
                        ? <button
                            className="completa"
                            onClick={() => cambiarEstadoIsCompleted(tarea)}
                        >Completa</button>
                        : <button
                            className="incompleta"
                            onClick={() => cambiarEstadoIsCompleted(tarea)}
                        >Incompleta</button>
                    }
                </div>
            </div>
            <div className="d-flex-btn">
                <button
                    onClick={() => eliminarTarea(tarea)}
                    className="btn btn-eliminar"
                >Eliminar</button>
                <button
                    onClick={() => onclickEditarTarea(tarea)}
                    className="btn btn-editar"
                >Editar</button>
            </div>
        </div>
    )
}

export default Tarea
