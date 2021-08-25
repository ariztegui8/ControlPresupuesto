import React, { useState } from 'react';
import Error from '../components/Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [error, guardarError] = useState(false);


    //Cuando el usuario agregue un gasto
    const agregarGasto = (e)=>{
        e.preventDefault();


        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);


        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }


        //Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);


        //Resetear el form
        guardarNombre('');
        guardarCantidad('');



    }



    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2 className="title-formulario">Agregar Gastos</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div>
                <label className="label-formulario"><b>Nombre Gasto</b></label>
                <input 
                    type="text"
                    className="input-formulario"
                    placeholder="Ej. Alquiler"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div>
                <label className="label-formulario"><b>Cantidad Gasto</b></label>
                <input 
                    type="number"
                    className="input-formulario"
                    placeholder="Ej. 10000"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="btn btn-primary btn-formulario"
                value="Agregar"
            />

        </form>

    )
};

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario
