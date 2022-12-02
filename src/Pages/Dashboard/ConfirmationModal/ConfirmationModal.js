import React from 'react';

const ConfirmationModal = ({title,message,closeModal,successAction,modalData,successButtonName}) => {
    return (
        <div>
console.log(modalData);
<input type="checkbox" id="ConfirmationModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4 text-red-600 text-xl">{message}</p>
    <div className="modal-action">
      <label onClick={closeModal} htmlFor="ConfirmationModal" className="btn-outline btn btn-success">Cancel</label>
      <label onClick={() => successAction(modalData)}  htmlFor="ConfirmationModal" className="btn-outline btn btn-error">{successButtonName}</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;
