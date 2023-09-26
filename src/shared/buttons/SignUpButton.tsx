import React, {FC} from 'react';
import './SignUpButton.scss'

interface SinqUpButtonProps {
    children: any;
    toggle: any;
}

const SinqUpButton:FC<SinqUpButtonProps> = 
    ({children, toggle}) => {
    return (
        <button className='SignUpButton text-18 medium' onClick={toggle}>
            {children}
        </button>
    );
};

export default SinqUpButton;