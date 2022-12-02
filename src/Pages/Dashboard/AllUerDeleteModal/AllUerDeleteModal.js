import React from 'react';

const AllUerDeleteModal = ({name,message,closingModal,successAction,modalUserData}) => {
    return (
        <div>
            {/* The button to open modal */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="AllUerDeleteModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={closingModal} className="btn ">Cancel</label>
      <label onClick={() => successAction(modalUserData)} htmlFor="AllUerDeleteModal" className="btn btn-error">Delete</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllUerDeleteModal;