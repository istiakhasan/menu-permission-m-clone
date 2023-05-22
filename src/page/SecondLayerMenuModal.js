import React from 'react';
import Modal from 'react-modal';

const SecondLayerMenuModal = ({children,modalIsOpen,setIsOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
        },
      };

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    return (

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         {children}
        </Modal>

    );
};

export default SecondLayerMenuModal;