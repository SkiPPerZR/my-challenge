import React, { FC } from 'react'
import './DefaultButton.scss'

interface DefaultButtonProps {
    children: string;
    paddingWidth: number;
    onClick: Function;
}

const DefaultButton:FC<DefaultButtonProps> = ({children, paddingWidth, onClick }) => {
    return (
        <button className='DefaultButton text-17 semibold' onClick={onClick()} style={{paddingLeft: paddingWidth + 'px', paddingRight: paddingWidth + 'px'}}>
            {children}
        </button>
    );
};

export default DefaultButton;