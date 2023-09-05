import React, { FC } from 'react';
import './Modal.scss'

interface ModalProps {
    visible: boolean;
    setVisible: any;
    children?: any;
}

const Modal:FC<ModalProps> = ({children, visible, setVisible}) => {

    const rootClasses = ['Modal']

    if(visible) {
        rootClasses.push('active')
    }

    return (
        <div className={rootClasses.join(' ')}>
            {children}
        </div>
    );
};

export default Modal;