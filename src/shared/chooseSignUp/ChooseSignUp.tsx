import React, { FC } from 'react';
import './ChooseSignUp.scss'

interface ChooseSignUpProps {
    icon: string;
    name: string;
    choose?: () => void;
    type?: () => void;
}

const ChooseSignUp:FC<ChooseSignUpProps> = ({icon, name, choose, type}) => {
    return (
        <div className='ChooseSignUp' onClick={choose} onMouseDown={type}>
            <img src={icon} alt={name}/>
            <p className='text-14 regular'>{name}</p>
        </div>
    );
};

export default ChooseSignUp;