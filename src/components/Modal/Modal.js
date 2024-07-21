import React from 'react';
import './Modal.css';

const Modal = ({ imgSrc, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={imgSrc} alt="Infographic" className="modal-img" />
      </div>
    </div>
  );
};

export default Modal;
