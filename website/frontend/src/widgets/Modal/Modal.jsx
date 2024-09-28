import React from "react";
import "./Modal.css";

const Modal = ({ heading, pic, content_1, content_2, onClose }) => {
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          
          <div className="close-btn" onClick={onClose}>
            &times;
          </div>
        </div>
        <div className="modal-content">
          <img src={pic} alt="Modal Visual" className="modal-image" />
          <div className="modal-title">{heading}</div>
          <div className="modal-description">
            {content_1 && <p>{content_1}</p>}
            {content_2 && <p className="modal-description-p">{content_2}</p>}
          </div>
          <div className="modal__button_container">
            <button className="modal__button">Linkdin profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;