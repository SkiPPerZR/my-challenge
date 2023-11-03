import React, {FC} from 'react';
import './SignUpButton.scss'

interface SignUpButtonProps {
    children: any;
    toggle: any;
    toggleStatus: () => void;
}

const SignUpButton:FC<SignUpButtonProps> = 
    ({children, toggle, toggleStatus}) => {
    return (
        <button className='SignUpButton text-18 medium' onClick={toggle} onMouseDown={toggleStatus}>
            {children}
        </button>
    );
};

export default SignUpButton;