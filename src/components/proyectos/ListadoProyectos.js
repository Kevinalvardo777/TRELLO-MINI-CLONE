import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';
import { OBTENER_PROYECTOS } from '../../types';


const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si el proyecto tiene contenidos
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   

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