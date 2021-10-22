import React from 'react'
import html2pdf from 'html2pdf.js'
import './CheckList.css'
import { useState } from 'react'



const CheckList = () => {
    const [valid, setValid] = useState({
    nombre: "",
    checked: false
}) 

const handleInputChange = (event) => {
    console.log(event.target.checked)
}

const enviar = e => {
    e.preventDefault()
    window.location.href = "/calculadora"
}

function generatePDF () {

    const form = document.getElementById("form");

    html2pdf()
    .from(form)
    .save();
}
    




    return (
        <div className="check-container">
            <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px" />
            <h4 id ="h4"> Revisión de arnés de seguridad y puntos de anclaje</h4>
            <p>Por tu seguridad, asegurate de revisar tu área de trabajo.</p>
            <form onSubmit={enviar} id="form" className="p-1">
                <div>
                    <label className="me-1">Nombre trabajador
                        <input type="text" name="nombre" required className="form-control" onChange={handleInputChange}/> 
                    </label>
                </div>     
                <h5>Estado del arnés</h5>
                <div className="form-check" >
                    <input className="form-check-input my-2" type="checkbox" name="check" required onChange={handleInputChange}/>
                    <label className="form-check-label my-1" id="form1">
                        Se encuentra libre de grasa, pinturas, etc.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input my-2" type="checkbox" name="check" required/>
                    <label className="form-check-label my-1">
                        No presenta costuras deshilachadas.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="check" required/>
                    <label className="form-check-label">
                        Posee la placa de identificación.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="check"/>
                    <label className="form-check-label">
                        Se encontraba correctamente almacenado.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  name="check"/>
                    <label className="form-check-label" >
                        No presenta cortes o desgarros.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  name="check"/>
                    <label className="form-check-label" >
                        Posee el tag de inspección Cesmec.
                    </label>
                </div>
                <h5>Estado de los accesorios</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  name="check"/>
                    <label className="form-check-label" >
                        Los anillos en ○ NO presentan deformaciones.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" >
                        Las hebillas están en buen estado.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" >
                        Mantiene los elementos plásticos.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        Los elementos plásticos están en buen estado.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        No presenta costuras deshilachadas.
                    </label>
                </div>
                <h5>Estado de la cuerda de vida</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        Se encuentra libre de grasa, pinturas, etc.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        Los ganchos están en buen estado.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        No presenta cortes en sus hebras.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No presenta costuras deshilachadas.
                    </label>
                </div>
                <h5>Estado de los puntos de anclaje</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No se visualiza alguna modificación o alteración del punto de anclaje.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        ¿El punto de anclaje a utilizar esta identificado de color amarillo?
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label">
                        El punto de anclaje se encuentra accesible.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" >
                        No existe deformación en alguno de los componentes (argolla, placa, pernos, etc).
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" >
                        Se encuentra instalada la placa identificadora que muestra el código, capacidad y estado de aprobación.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" >
                    La placa cuenta con la decha de validación, tipo y fijación del anclaje.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check"/>
                    <label className="form-check-label" >
                    NO se aprecian fisuras o golpes en el punto de anclaje.
                    </label>
                </div>
                <button type="submit" className="btn-calculator">Ir a calculadora de ELC</button>  
            </form>
            <button className="btn-pdf" onClick={generatePDF}></button>
            <span>Descargar pdf</span>
        </div>
    )
}

export default CheckList;
