import React from 'react';
import ReactDom from 'react-dom';
import './styles/Modal.css';

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button className="Modal__close-button" onClick={props.toggleShow}>
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
}
