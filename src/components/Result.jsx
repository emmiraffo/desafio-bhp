import React from 'react';


function Result(props) {
    const { ERT, LE, ET, ELC } = props
    console.log("LAS PROPS", props)

    return <div className="container">
        <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px" />
        <h1 className="name">RESULTADO</h1>
        <h2 className="title">ESPACIO LIBRE REQUERIDO PARA DETENER LA CAIDA</h2>
        <h1 className="nameForm">{ELC.toFixed(2)}</h1>
        <img className="gif" src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/ELC.gif?alt=media&token=61755ff4-8bb2-4475-95d2-55682514426c" width="300px" loop="finite"></img>
        <div className="nota">
            <i></i>
            <span >Trabaja seguro, si no te sientes preparado para proseguir mejor no lo hagas</span>

        </div>
        <div className="btnsResult">
            <a href="/calculadora" type="button" className="btn btn-secondary">RECALCULAR</a>
            <a href="/" type="button" className="btn btn-secondary">FINALIZAR</a>
        </div>
    </div>

}

export default Result;