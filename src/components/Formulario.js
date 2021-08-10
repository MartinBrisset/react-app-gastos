import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [error, setError] = useState(false)

    const agregarGasto = (e) => {
        e.preventDefault()

        //validar
        if (cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '' ) {
            setError(true)
            return
        }
        //si pasa la validacion
        setError(false)

        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)

        //resetear el formulario
        setNombre('')
        setCantidad('')


    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>
            {/* Si hay error entonces muestra esto */}
            { error ? <Error msg='Los campos son ogligatorios' /> : null }
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 17.000'
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt( e.target.value ))}
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;