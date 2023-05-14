import React, { useState } from 'react';
import ReactModal from 'react-modal';
import AddFormNewTableDates from './AddFormNewTableDates';
import './styles/modal.css';

const Modal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div style={{ zIndex: 1000 }}>
      <button onClick={openModal} type="button" className="waves-effect waves-light btn">
        Add Contact
      </button>
      <ReactModal
        className="modal-content"
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
        }}>
        <AddFormNewTableDates closeModal={closeModal} />
      </ReactModal>
    </div>
  );
};

export default Modal;
