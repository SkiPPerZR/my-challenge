import React, {FC} from 'react';
import './SignUpButton.scss'

interface SignUpButtonProps {
    children: string;
    toggle: ()=>void;
    toggleStatus: Function;
}

const SignUpButton:FC<SignUpButtonProps> = 
    ({children, toggle, toggleStatus}) => (
        <button className='SignUpButton text-18 medium' onClick={toggle} onMouseDown={() => toggleStatus(true)}>
            {children}
        </button>
    );

export default SignUpButton;