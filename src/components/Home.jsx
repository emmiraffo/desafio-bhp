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
    <div >
      <div className="containerHome">
        <div>
          <div>
            <img className="bhpLogo" src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px"/>
          </div>
          <div className="backgroundImg">
            <img className="" src="https://i.pinimg.com/564x/5a/6a/74/5a6a7434407e7b91cde3c81ab6ab425b.jpg"/>
          </div>        
        </div>

        <div className="keepSafe">
          <h1 className="textKeepSafe">En casa te esperan, mantente seguro</h1>
        </div>

        <div className="backgroundSelectBtn">
          <div className="backgroundSelect">
            <select className="form-select" value={role} onChange={handleSelectChange}>
              <option value="zero">SELECCIONA TU ESPECIALIDAD</option>
              <option value="one">Eléctrico</option>
              <option value="two">Soldador</option>
              <option value="three">Trabajos generales</option>
            </select>
          </div>

          <button type="buttonHome" class="btn btn-secondary">CONTINUAR</button>
        </div>  
      </div>
    </div>
  )
}

export default withRouter(Home);
