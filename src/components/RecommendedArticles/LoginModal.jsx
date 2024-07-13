import React from 'react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl mb-4">You need to log in to read the article</h2>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={onLogin}
        >
          Log In
        </button>
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
