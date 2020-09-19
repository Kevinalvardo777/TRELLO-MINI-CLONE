import React, {useReducer} from 'react';

import {v4 as uuid} from "uuid"; 

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTOS, 
    VALIDAR_FORMULARIO, 
    PROYECTO_ACTUAL, 
    ELIMINAR_PROYECTO
} from '../../types'



const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' }, 
        { id: 2, nombre: 'Intranet' }, 
        { id:3, nombre : 'Diseño de Sitio Web' }, 
        { id: 4, nombre: 'MERN'}
    ]

    const initialState = {
        proyectos : [],
        formulario : false, 
        errorFormulario: false, 
        proyecto: null
    }


    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS, 
            payload: proyectos
        });
    };  

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid;

        // Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto 
        })
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL, 
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO, 
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos, 
                agregarProyecto, 
                mostrarError, 
                proyectoActual, 
                eliminarProyecto         
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;