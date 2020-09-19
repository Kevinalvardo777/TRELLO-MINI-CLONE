
import { AGREGAR_TAREA, TAREAS_PROYECTO, VALIDAR_TAREA, ELIMINAR_TAREA } from '../../types'


export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state, 
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA: 
            return {
                ...state, 
                tareas: [...state.tareas, action.payload], 
                errorTarea: false
            }
        case VALIDAR_TAREA: 
            return {
                ...state, 
                errorTarea: true
            }
        case ELIMINAR_TAREA: 
            return {
                ...state, 
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        default: 
            return state;
    }
}