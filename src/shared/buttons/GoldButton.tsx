import React, {FC} from 'react';
import "./GoldButton.scss"

interface GoldButtonProps {
    text: string;
}

const GoldButton:FC<GoldButtonProps> = ({text}) => (
    <button className='GoldButton text-17 semibold'>
        {text}
    </button>
);

export default GoldButton;