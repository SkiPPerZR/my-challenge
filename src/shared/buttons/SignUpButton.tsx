import React, {FC} from 'react';
import './SignUpButton.scss'

interface SinqUpButtonProps {
    children: any;
    toggle: any;
    toggleStatus: () => void;
}

const SinqUpButton:FC<SinqUpButtonProps> = 
    ({children, toggle, toggleStatus}) => {
    return (
        <button className='SignUpButton text-18 medium' onClick={toggle} onMouseDown={toggleStatus}>
            {children}
        </button>
    );
};

export default SinqUpButton;