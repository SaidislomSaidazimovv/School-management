import React from 'react';

function CustomModal({ showIsLogOutModal, setShowIsLogOutModal, children }) {
  return (
    <div
      id='wrapper'
      onClick={(e) => e.target.id === 'wrapper' ? setShowIsLogOutModal(false) : ""}
      className={`duration-300 fixed inset-0 flex items-center justify-center backdrop-blur-md transition-transform ${
        showIsLogOutModal ? "scale-100" : "scale-0"
      }`}
    >
      <div className='w-[500px] h-[300px] rounded-md bg-white shadow-2xl'>
        {children}
      </div>
    </div>
  );
}

export default CustomModal;