import React, { FC } from 'react';
import './ChooseSignUp.scss'

export enum ChooseVariant {
    standart = 'ChooseSignUp',
    bright = 'ChooseSignUpBright'
}

interface ChooseSignUpProps {
    icon: string;
    name: string;
    theme: ChooseVariant;
    choose?: () => void;
    type?: () => void;
}

const ChooseSignUp:FC<ChooseSignUpProps> = ({icon, name, choose, type, theme}) => {
    return (
        <div className={theme} onClick={choose} onMouseDown={type}>
            <img src={icon} alt={name}/>
            <p className='text-14 regular'>{name}</p>
        </div>
    );
};

export default ChooseSignUp;