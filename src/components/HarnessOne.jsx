import React from 'react';

export const HarnessOne = () => {

  const continuar = () => {
    window.location.href = "/checklist"
  }

  return (
    <div className="container"> 
      <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px" />
      <h1 className="name">ARNÉS PARA ELÉCTRICOS</h1>
      <h2>Arnés Especial</h2>
      <div>
      <img src="https://bbrtreck.s3-sa-east-1.amazonaws.com/images/product/09-02-008-F1-1300.jpg" width="300px" />
          
          <h4>Arnés para trabajos relacionados con el manejo de cargas de tensión y arco eléctrico. 
          Fabricado y certificado con materiales que cumplan con ASTM F887. Esta norma indica que
          debe soportar una carga calórica de 40 cal/cm2, además este arnés no debe tener partes metálicas.
          </h4>
      </div>
      <h2>Punto de Anclaje</h2>
      <div>
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/AFKEW2EGVZFCLDKRA2B7TJ65Z4.png" width="300px" />
          <h4>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </h4>
      </div>
      <button type="button" class="btn btn-secondary" onClick={continuar}>CONTINUAR</button>
    </div>
    
    
    
  )
}

export default HarnessOne;
