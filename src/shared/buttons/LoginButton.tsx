import React, {FC} from 'react';
import './LoginButton.scss'

interface LoginButtonProps {
    children: any;
    toggle: any;
}

const LoginButton:FC<LoginButtonProps> = 
    ({children, toggle}) => {
    return (
        <button className='LoginButton text-18 medium' onClick={toggle}>
            {children}
        </button>
    );
};

export default LoginButton;