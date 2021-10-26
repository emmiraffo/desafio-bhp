import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './glossary.css';

export const Glossary = (props) => {
    const { name, userRol}=props
    
    let history = useHistory();
  
    const cerrar = () => {
      history.push('/calculadora' , props);
    }
  
    return (
    <div className="container-glossary">
    <h2>Espacio Real Terreno:</h2><h4>espacio entre el punto de anclaje y el objeto más cercano de impacto en caso de caída.</h4>
    <h2>Longitud del estrobo:</h2><h4>Distancia rectilínea medida desde un punto de apoyo a otro punto de apoyo. Nunca se debe alargar una línea de sujeción uniendo dos de ellas mediante ganchos de resortes o ganchos para escalera. Sólo se deben usar líneas de conexión o estrobos de la longitud o largo requerido.</h4>
    <h2>Estatura del trabajador:</h2><h4>Medición en metros de la estatura del trabajador</h4>  
    <h2>Amortiguador de impacto:</h2><h4>Componente diseñado para disipar la energía cinética generada durante una caída que limita las fuerzas de detención aplicadas al sistema personal de detención de caída, al dispositivo de anclaje y al usuario.</h4>
    <h2>Anclaje:</h2><h4>Un punto de conexión seguro de un sistema de protección contra caídas, capaz de soportar con seguridad las fuerzas de una caída aplicadas a un SDDC, puede ser una estructura fija como un poste, puntal, viga, columna, suelo o pared.</h4>
    <h2>Arnés:</h2><h4>Parte de los elementos de protección personal en trabajos realizados en altura. Se usa para contener el cuerpo y distribuir apropiadamente sobre éste las fuerzas dinámicas de detención de caídas y las fuerzas de suspensión posteriores a la detención de caídas..</h4> 
    <h2>Estandar de detencion de caídas: Conjunto de componentes y subsistemas interconectados, el cual incluye un arnés de cuerpo completo utilizado por el usuario y que, al ser conectado a un dispositivo de anclaje apropiado, detiene una caída desde altura.</h2>
    <h2>Estrobo:</h2><h4>Elemento de conexión de material flexible que, en conjunto con un amortiguador de impacto, se utiliza como un subsistema de conexión en un sistema personal de detención de caída.</h4> 
    <h2>Línea de conexión:</h2><h4>Línea, fijada a un dispositivo para detención tipo deslizante, que está diseñada para vincular a éste con un punto de fijación para detención de caídas sobre el arnés para el cuerpo completo.</h4>
    <h2>Punto de anclaje:</h2><h4>Es un punto seguro de sujeción del sistema personal para la detención de caídas a la estructura disponible.</h4>
    <h2>Riesgo:</h2><h4>Probabilidad de que eventos, esperados o inesperados causen un impacto adverso</h4>
    <h2>Tag de inspección Cesmec:</h2><h4> Marca de verificación de inspaccion Cesmec (Centro de Estudios de Medición y Certificación de Calidad)  </h4>
    </div>
    )
  }
  
  export default Glossary;
  