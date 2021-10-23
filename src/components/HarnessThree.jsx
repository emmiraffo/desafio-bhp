import React from 'react';
import { useHistory } from "react-router-dom";

const HarnessThree = () => {
  
  let history = useHistory();

  const continuar = () => {
    history.push('/checklist');
  }

  return (
    <div className="container">
      <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo" width="100px" />
      <h1 className="name">TRABAJOS GENERALES</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <h2>Arnés Especial</h2> 
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
        <div>
          <img className="imgInfo" src="https://bbrtreck.s3-sa-east-1.amazonaws.com/images/product/09-02-008-F1-1300.jpg" width="300px" />
            <p></p>
        </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <h2>Punto de Anclaje</h2>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div>
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/AFKEW2EGVZFCLDKRA2B7TJ65Z4.png" width="200px" />
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="knowledgeCheck" onSubmit={continuar}>  
          <div className="form-check">
            <input className="form-check-input my-2" type="checkbox" required/>
            <label className="form-check-label my-1" for="flexCheckDefault">
             Tomo conocimiento de las indicaciones y me comprometo a cumplir con los estándares establecidos.
            </label>
          </div>
          <button type="submit" class="btn btn-secondary">CONTINUAR</button>
        </form>
    </div>
    </div>
  )
}

export default HarnessThree;
