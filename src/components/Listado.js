import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return (
        <div className="contenedor-listado">
            <h2 className="title-listado">Listado</h2>
            {gastos.map(gasto =>(
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )
};

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado
