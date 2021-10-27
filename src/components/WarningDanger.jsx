import React, { useState } from 'react';
import './calculadora.css';


function WarningDanger(props) {
    const { ERT, LE, ET, ELC } = props

    return <div>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px" alt="BHP" />
            <div className="container-result">
            <div className="result-warning">
            <i class="fa fa-times-circle fa-3x" aria-hidden="true"></i>
            <h2 className="warning" >  ESPACIO LIBRE REQUERIDO PARA DETENER LA CAIDA NO CUMPLE CON LAS MEDIDAS DE SEGURIDAD</h2>
            <h1 className="nameForm">{ELC.toFixed(2)} metros</h1><br/>
            </div>

            <div className="nota">
                <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true" ></i>
                <span >Si la caída se detiene demasiado abruptamente, el trabajador puede sufrir serias lesiones, incluso fatales</span>
            </div>
            <div >
                <a href="/calculadora" type="button" className="btn btn-secondary">RECALCULAR</a>
            </div>
        </div>
        </div>
    </div>
}

export default WarningDanger;