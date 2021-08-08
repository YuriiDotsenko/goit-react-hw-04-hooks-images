import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { createPortal } from 'react-dom';

const Modal = ({ toggleModal, children }) => {
  const rootModal = useRef(document.querySelector('#modal-root'));

  const handleEscape = useCallback(
    event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="Backdrop" onClick={handleBackdrop}>
      <div className="Content">{children}</div>
    </div>,
    rootModal.current,
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
