import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
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
    <div>
      <select className="form-select" value={role} onChange={handleSelectChange}>
        <option value="zero">SELECCIONA TU ESPECIALIDAD</option>
        <option value="one">Eléctrico</option>
        <option value="two">Soldador</option>
        <option value="three">Trabajos generales</option>
      </select>
      <div>
        <Modal isOpen={modalIsOpen} style={modalStyles}>
          <h1>Modal title</h1>
          <p>Modal body</p>
          <div>
            <button onClick={handleCloseModal}>Close modal</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default withRouter(Home);
