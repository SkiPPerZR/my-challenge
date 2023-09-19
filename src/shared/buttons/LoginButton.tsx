import React, {FC} from 'react';
import './LoginButton.scss'

interface LoginButtonProps {
    children: any;
    onClick?: () => void;
}

const LoginButton:FC<LoginButtonProps> = 
    ({children, onClick}) => {
    return (
        <button className='LoginButton text-18 medium' onClick={onClick}>
            {children}
        </button>
    );
};

export default LoginButton;