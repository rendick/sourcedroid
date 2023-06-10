import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Modal"
                style={{
                    overlay: {
                        zIndex: 9999,
                    },
                    content: {
                        zIndex: 9999,
                    },
                }}
            >
                <h2>Modal Title</h2>
                <p>Modal content goes here.</p>
                <button onClick={handleCloseModal}>Close Modal</button>
            </ReactModal>
        </div>
    );
};

export default Modal;
