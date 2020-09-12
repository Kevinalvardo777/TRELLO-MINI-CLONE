import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import Formtarea from '../tareas/FormTarea';
import ListadoTreas from '../tareas/ListadoTareas';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
           <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <Formtarea />
                    <div className="contenedor-tareas">
                        <ListadoTreas />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;