import React, { FC } from 'react'
import './DefaultButton.scss'

export enum ButtonVariant {
    standart = 'DefaultButton',
    revers = 'ReversButton',
    backRevers = 'BackRevers'
}

interface DefaultButtonProps {
    children: string;
    paddingWidth: number;
    onClick: Function;
    theme: ButtonVariant;
}

const DefaultButton:FC<DefaultButtonProps> = ({children, paddingWidth, onClick, theme }) => {
    return (
        <button className={theme} onClick={onClick()} style={{paddingLeft: paddingWidth + 'px', paddingRight: paddingWidth + 'px'}}>
            {children}
        </button>
    );
};

export default DefaultButton;