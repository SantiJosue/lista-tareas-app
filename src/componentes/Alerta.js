import React, {useEffect} from 'react';
import '../App.css';

const Alerta = ({mensaje, estadoAlerta, cambiarEstadoAlerta}) => {

    useEffect(() => {
        let tiempo;

        if(estadoAlerta){
            tiempo = setTimeout(() => {
                cambiarEstadoAlerta(false)
            }, 2000)
        }
        return(() => clearTimeout(tiempo));

    }, [estadoAlerta, cambiarEstadoAlerta]);

    return (
        <>
			{estadoAlerta &&
				<section className='contenedor-alerta'>
					<p className='contenedor-alerta__p'>{mensaje}</p>
				</section>
			}
		</>
    );
}
 
export default Alerta;