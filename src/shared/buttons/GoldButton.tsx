import React, {FC} from 'react';
import '../../shared/buttons/GoldButton.scss'

interface GoldButtonProps {
    text: string;
}

const GoldButton:FC<GoldButtonProps> = ({text}) => {
    return (
        <button className='GoldButton text-17 semibold'>
            {text}
        </button>
    );
};

export default GoldButton;