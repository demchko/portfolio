import React from 'react';
import ModalContent from "../ModalContent/ModalContent";
import style from './Modal.module.css';

const Modal = ({ text, isOpen }) => {
    return (
        <div className={`${style.modal} ${isOpen ? style.open : ''}`}>
            <div className={style.modalContent}>
                <ModalContent text={text} />
            </div>
        </div>
    );
};

export default Modal;
