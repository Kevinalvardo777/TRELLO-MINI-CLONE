import { FORMULARIO_PROYECTO } from '../../types';

export default (state, action) => {
    switch(action.type) {
        default: 
            return {
                ...state, 
                formulario: true
            }
    }
}

