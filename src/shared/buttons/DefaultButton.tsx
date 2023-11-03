import React, { FC } from 'react'
import './DefaultButton.scss'

interface DefaultButtonProps {
    children: string;
    paddingWidth: number;
}

const DefaultButton:FC<DefaultButtonProps> = ({children, paddingWidth}) => {
    return (
        <button className='DefaultButton text-17 semibold' style={{paddingLeft: paddingWidth + 'px', paddingRight: paddingWidth + 'px'}}>
            {children}
        </button>
    );
};

export default DefaultButton;