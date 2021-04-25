import React, { useState, useEffect } from 'react'
import Error from "./Error";

const initialState = {
    name: "",
    des: ""
}

const Form = ({ AgregarTarea, editarTarea }) => {
    const [valores, setValores] = useState(initialState);
    const { name, des } = valores;

    const [error, setError] = useState(false);

    useEffect(() => {
        if (editarTarea) {
            setValores(editarTarea);
        } else {
            setValores(initialState);
        }
    }, [editarTarea])

    const handleInputs = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = (e) => {
        //prevengo que la accion por default del formulario (mandarlo)
        e.preventDefault();

        //Valido que los inputs no vengan vacios 
        if (name.trim() === "" || des.trim() === "") {
            setError(true)
            setTimeout(() => {
                setError(false);
            }, 3000);
            return
        }

        //Añadir los valores del formulario al state principal
        if (editarTarea) {
            AgregarTarea(valores);
        } else {
            valores.id = Date.now();
            valores.isComplted = false;
            AgregarTarea(valores);
        }

        //Inicializo los valores a los predeterminados (vacios)
        setValores(initialState);
    }

    return (
        <>
            <form
                onSubmit={handleForm}
            >
                <input
                    type="text"
                    placeholder="Nombre de la tarea"
                    onChange={handleInputs}
                    value={name}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Descripción de la tarea"
                    onChange={handleInputs}
                    value={des}
                    name="des"
                />
                <input
                    type="submit"
                    value={editarTarea ? "Editar tarea" : "Añadir tarea"}
                />
                {error &&
                    <Error
                        msg={"Todos los campos son obligatorios"}
                    />
                }
            </form>
        </>
    )
}

export default Form
