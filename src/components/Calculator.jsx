import React from 'react';

function Calculator() {



    return <div className="container">
        <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp-logo.png?alt=media&token=6c1bb77d-7b54-4cd1-a819-de6634e921d7" width="100px" />
        <h1 className="name">CALCULADORA</h1>
        <p  >ELC</p>
        <h1 className="nameForm">Ingreso de parámetros</h1>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Espacio Real Terreno</label>
            </div>
            <div className="col-auto">
                <input type="number" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="col-auto">
                <span className="form-text"> metros </span>
            </div>
        </div>

        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Espacio Real Terreno</label>
            </div>
            <div className="col-auto">
                <input type="number" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="col-auto">
                <span className="form-text"> metros </span>
            </div>
        </div>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Espacio Real Terreno</label>
            </div>
            <div className="col-auto">
                <input type="number" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="col-auto">
                <span className="form-text"> metros </span>
            </div>
        </div>
        <button type="button" class="btn btn-secondary">CALCULAR</button>
    </div>

}

export default Calculator;