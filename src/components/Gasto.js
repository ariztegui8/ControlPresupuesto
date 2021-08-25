import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => {
    return (
        <div className="gasto-gasto">
            <p className="gasto-nombre">{gasto.nombre}</p>
            <p className="gasto-cantidad">${gasto.cantidad}</p>
        </div>
    )
};

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto
