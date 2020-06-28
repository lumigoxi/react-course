import React from 'react';
import Modal from './Modal';

export default function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} toggleShow={props.toggleShow}>
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge</p>

        <div>
          <button className="btn btn-danger mr-4" onClick={props.deleteBadge}>
            Delete
          </button>
          <button className="btn btn-primary" onClick={props.toggleShow}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
