import React, { useContext } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos } = proyectosContext;

    // Revisar si el proyecto tiene contenidos
    if (proyectos.length === 0) return null;

    return ( 
        <ul className="Listado-proyectos">
            {proyectos.map( proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto} 
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;