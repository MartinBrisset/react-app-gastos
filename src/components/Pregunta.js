import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, setMuestra }) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //funcion para leer el presupuesto
    const definirPresupuesto = (e) => {

        setCantidad(parseInt(e.target.value))
    }

    //submit para definir presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault()
        //validar dato ingresado en el formulario
        if (cantidad < 1 || isNaN( cantidad ) ) {
            setError(true)
            return
        }

        //si pasa la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMuestra(false)

    }

    return ( 
        <>
            <h2>
                Coloca tu presupuesto
            </h2>
            {/* Si hay error entonces muestra esto */}
            { error ? <Error msg='El presupuesto es incorrecto' /> : null }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholde='Coloca tu puresupuesto'
                    onChange={definirPresupuesto}
                >

                </input>

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                >
                    
                </input>
            </form>
        </>
    );
}
 
Pregunta.prototype = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMuestra: PropTypes.func.isRequired
}

export default Pregunta;