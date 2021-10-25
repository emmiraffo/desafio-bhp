import React from 'react';
import { useHistory } from "react-router-dom";
import './Harness.css'


export const HarnessOne = () => {
  
  let history = useHistory();

  const continuar = () => {
    history.push('/checklist');
  }

  return (
  <div className="container-harness">
    <nav >
      <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo BHP" width="100px" />
    </nav>
    <div className="main-harness"> 
      <h1 className="name">ELÉCTRICO</h1>
      <div className="accordion accordion-flush m-4">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <h2>Arnés Especial</h2> 
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
            <div>
            <img className="imgInfo" src="https://bbrtreck.s3-sa-east-1.amazonaws.com/images/product/09-02-008-F1-1300.jpg" width="150px" />
            
            <div>
              <p className="fs-6">Arnés para trabajos relacionados con el manejo de cargas de tensión y arco eléctrico. 
                  Fabricado y certificado con materiales que cumplan con ASTM F887. Esta norma indica que debe soportar una carga calórica de 40 cal/cm2, además este arnés no debe tener partes metálicas.
              </p>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <h2>Punto de Anclaje</h2>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className="harnessInfo">
                <div>
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/AFKEW2EGVZFCLDKRA2B7TJ65Z4.png" width="150px" />
                </div>
                <div className="fs-6">
                  <h6>El punto de anclaje deberá cumplir con los siguientes requisitos:</h6>
                    <ol>
                      <li>Deberá resistir una carga mayor o igual a 2.226 Kg.por trabajador conectado.</li>
                      <li>Deberá ser independiente de cualquier anclaje que vaya a ser usado para suspender o soportar plataformas de trabajo.</li>
                      <li>Deberá adaptarse al tipo de trabajo a desarrollar, a la instalación y a la estructura disponible.</li>
                      <li>Los puntos de anclaje deben estar identificados por una placa que muestre de manera permanente y legible el código, capacidad y estado de aprobación.</li>
                      <li>Los dispositivos de anclaje para ser certificados deben cumplir satisfactoriamente los ensayos estipulados en ANSI/ASSE Z359.1-2007 4.3.6 o la EN 795:2012.</li>
                      <li>Estar certificados por una persona calificada.</li>
                      <li>Si no te sientes seguro/a no sigas con el trabajo. Para mayor información contacta a tu supervisor/a.</li>
                    </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="m-2" onSubmit={continuar}>  
          <div className="form-check">
            <input className="form-check-input my-2" type="checkbox" required/>
            <label className="form-check-label my-1 fw-light fs-6">
              Tomo conocimiento de las indicaciones y me comprometo a cumplir con los estándares establecidos.
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">CONTINUAR</button>
        </form>
    </div>
  </div>
</div>
  )
}

export default HarnessOne;
