import React, {FC} from 'react';
import './SinqUpButton.scss'

interface SinqUpButtonProps {
    children: any;
}

const SinqUpButton:FC<SinqUpButtonProps> = 
    ({children}) => {
    return (
        <button className='SinqUpButton text-18 medium'>
            {children}
        </button>
    );
};

export default SinqUpButton;