import React, { useState } from 'react';
import { withRouter } from 'react-router';

const Home = (props) => {

  const [role, setRole] = useState('zero');

  const handleSelectChange = (e) => {
    setRole(e.target.value)
    alert('Acuerdo de licencia de usuario final (EULA)');
    if (e.target.value === 'one') {
      props.history.push('/harnessone');
    }
    if (e.target.value === 'two') {
      props.history.push('/harnesstwo');
    }
    if (e.target.value === 'three') {
      props.history.push('/harnessthree');
    }
  }

  return (
    <div>
      <select className="form-select" value={role} onChange={handleSelectChange}>
        <option value="zero">SELECCIONA TU ESPECIALIDAD</option>
        <option value="one">Eléctrico</option>
        <option value="two">Soldador</option>
        <option value="three">Trabajos generales</option>
      </select>
    </div>
  )
}

export default withRouter(Home);
