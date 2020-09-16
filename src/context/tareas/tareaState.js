import React, {useReducer} from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 }, 
            { nombre: 'Elegir Colores', estado: true, proyectoId: 2 }, 
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 }, 
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 }, 
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 }, 
            { nombre: 'Elegir Colores', estado: true, proyectoId: 2 }, 
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 }, 
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 4}, 
            { nombre: 'Elegir Colores', estado: true, proyectoId: 1 }, 
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 3 }, 
            { nombre: 'Elegir Colores', estado: true, proyectoId: 4 }, 
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 }, 
        ]
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value= {{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;