import React, {FC} from 'react';
import './LoginButton.scss'

interface LoginButtonProps {
    children: any;
    toggle: () => void;
    toggleStatus: Function;
}

const LoginButton:FC<LoginButtonProps> = 
    ({children, toggle, toggleStatus}) => {
    return (
        <button className='LoginButton text-18 medium' onClick={toggle} onMouseDown={()=>toggleStatus(true)}>
            {children}
        </button>
    );
};

export default LoginButton;