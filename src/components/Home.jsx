import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import './Home.css'

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '10%',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',

  },
};

const Home = (props) => {

  const [role, setRole] = useState('zero');

  const handleSelectChange = (e) => {
    setRole(e.target.value)
    handleOpenModal();
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
    if (role === 'one') {
      props.history.push('/harnessone');
    }
    if (role === 'two') {
      props.history.push('/harnesstwo');
    }
    if (role === 'three') {
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
            <img className="" src="https://i.pinimg.com/564x/27/d9/71/27d97141788c1c2f604e1d2949f0390a.jpg"/>
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

          
        </div>
        <div className="modal">
        <Modal isOpen={modalIsOpen} style={modalStyles}>
          <h1>Acuerdo de licencia de usuario final</h1>
          <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
          <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
          <div>
            <button onClick={handleCloseModal}>Acepto</button>
          </div>
        </Modal>
      </div>  
      </div>
    </div>
  )
}

export default withRouter(Home);
